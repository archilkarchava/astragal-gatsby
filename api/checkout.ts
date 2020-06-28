import sanityClient from "@sanity/client"
import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import fetch from "isomorphic-fetch"
import notify from "../api-modules/notify"
import type { CustomerFromDB } from "../api-modules/types/api-types"
import {
  faunaGraphqlFetchMethodAndHeaders,
  faundaDbGraphQlEndpoint,
  fetchCustomerById,
} from "../api-modules/utils/faunadb"
import serializeCustomerIdCookie from "../api-modules/utils/serializeCustomerIdCookie"
import { Store } from "../src/contexts/siteContext"
import phoneNumberRegex from "../src/utils/phoneNumberRegex"

interface OrderFromDB {
  _id: string
  currentCustomerName: string
  currentCustomerPhone: string
  items: {
    productId: string
    title: string
    price: number
    oldPrice: number
    quantity: number
  }[]
  customer: CustomerFromDB
  totalSum: number
  creationDate: string
}

const sanity = sanityClient({
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const fetchOrderProducts = async (cartItemsDto: OrderDto["cartItems"]) => {
  const data = await sanity.fetch<
    Pick<GatsbyTypes.SanityProduct, "_id" | "title" | "price" | "oldPrice">[]
  >(
    `*[_type == "product" && _id in $ids] {
    _id,
    title,
    price,
    oldPrice,
  }`,
    { ids: Object.keys(cartItemsDto) }
  )
  const cartItems: OrderInput["cartItems"] = {}
  data.forEach(({ _id, title, price, oldPrice }) => {
    cartItems[_id] = {
      title,
      price,
      oldPrice,
      quantity: cartItemsDto[_id].quantity,
    }
  })
  return cartItems
}

interface OrderDto {
  customer: Omit<CustomerFromDB, "_id">
  cartItems: Store["cartItems"]
}

interface OrderInput {
  customer: CustomerFromDB
  cartItems: {
    [productId: string]: {
      title: GatsbyTypes.SanityProduct["title"]
      price: GatsbyTypes.SanityProduct["price"]
      oldPrice: GatsbyTypes.SanityProduct["oldPrice"] | undefined
      quantity: number
    }
  }
  totalSum: number
}

const countOrderPrice = (cartItems: OrderInput["cartItems"]) => {
  const totalPrice = Object.values(cartItems).reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return totalPrice
}

const createOrFetchCustomerIdInDatabase = async (customer: CustomerFromDB) => {
  const createCustomerQuery = `mutation($customer: CustomerInput!) {
    createCustomer(data: $customer) {
      _id
    }
  }`
  let customerId: string
  if (customer._id) {
    const customerFromDb = await fetchCustomerById(customer._id)
    if (customerFromDb) {
      customerId = customerFromDb._id
    }
  }
  if (!customerId) {
    const res = await fetch(faundaDbGraphQlEndpoint, {
      ...faunaGraphqlFetchMethodAndHeaders,
      body: JSON.stringify({
        query: createCustomerQuery,
        variables: {
          customer: {
            name: customer.name,
            phoneNumber: customer.phoneNumber,
          },
        },
      }),
    })
    if (!res.ok) {
      throw new Error(`Не получилось добавить покупателя в базу данных.`)
    }
    const { data } = await res.json()
    customerId = data.createCustomer._id
  }
  return customerId
}

const addOrderToDatabase = async (order: OrderInput): Promise<OrderFromDB> => {
  const createOrderQuery = `mutation($customerId: ID!,
    $currentCustomerName: String!,
    $currentCustomerPhone: String!,
    $items: [ProductInput!]!,
    $totalSum: Float!,
    $creationDate: Time!) {
    createOrder(data: {
      customer: {connect: $customerId},
      currentCustomerName: $currentCustomerName
      currentCustomerPhone: $currentCustomerPhone
      items: $items
      totalSum: $totalSum
      creationDate: $creationDate
    }) {
      _id
      currentCustomerName
      currentCustomerPhone
      items {
        productId
        title
        price
        oldPrice
        quantity
      }
      customer {
        _id
        name
        phoneNumber
      }
      totalSum
      creationDate
    }
  }`

  const res = await fetch(faundaDbGraphQlEndpoint, {
    ...faunaGraphqlFetchMethodAndHeaders,
    body: JSON.stringify({
      query: createOrderQuery,
      variables: {
        customerId: order.customer._id,
        currentCustomerName: order.customer.name,
        currentCustomerPhone: order.customer.phoneNumber,
        items: Object.entries(order.cartItems).map(([productId, val]) => ({
          ...val,
          productId,
        })),
        totalSum: order.totalSum,
        creationDate: new Date().toISOString(),
      },
    }),
  })
  const json = await res.json()
  if (!res.ok || json.errors) {
    throw new Error(`Не получилось добавить заказ.`)
  }
  return json.data.createOrder
}

const composeOrderMessageText = ({
  customer,
  items,
  totalSum,
  currentCustomerName,
  currentCustomerPhone,
}: OrderFromDB) => {
  const idText = `ID: ${customer._id}`
  const nameText =
    customer.name === currentCustomerName
      ? `Имя: ${customer.name}`
      : `Имя: ${currentCustomerName} (в прошлом ${customer.name})`
  const phoneNumberText =
    customer.phoneNumber === currentCustomerPhone
      ? `Номер телефона: ${customer.phoneNumber}`
      : `Номер телефона: ${currentCustomerPhone} (в прошлом ${customer.phoneNumber})`
  return `Покупатель (${[idText, nameText, phoneNumberText]
    .filter((textStr) => textStr && textStr.length > 0)
    .join(", ")}) хочет сделать заказ на сумму ${totalSum} рублей.
Товары:
${items
  .map(
    ({ title, price, quantity }) =>
      `    ${title} - ${price} руб. в количестве ${quantity} шт.`
  )
  .join(",\n")}
`
}

export default async (req: NowRequest, res: NowResponse) => {
  const orderDto: OrderDto = req.body
  if (
    !orderDto.cartItems ||
    Object.keys(orderDto.cartItems).length === 0 ||
    !orderDto.customer ||
    !orderDto.customer.name ||
    orderDto.customer.name.length < 1 ||
    !orderDto.customer.phoneNumber ||
    !orderDto.customer.phoneNumber.match(phoneNumberRegex)
  ) {
    res.status(422).json({ message: "Неверный запрос." })
    return
  }
  let cartItems: OrderInput["cartItems"]
  try {
    cartItems = await fetchOrderProducts(orderDto.cartItems)
  } catch (error) {
    res.status(400).json({ message: "Не получилось загрузить товары." })
    return
  }
  if (!cartItems) {
    res.status(400).json({ message: "Не получилось загрузить товары." })
    return
  }
  const { customerId: customerIdFromCookie } = req.cookies
  const customerId = await createOrFetchCustomerIdInDatabase({
    ...orderDto.customer,
    _id: customerIdFromCookie,
  })
  const order: OrderInput = {
    customer: {
      _id: customerId,
      ...orderDto.customer,
    },
    cartItems,
    totalSum: countOrderPrice(cartItems),
  }

  res.setHeader("Set-Cookie", [serializeCustomerIdCookie(order.customer._id)])
  let orderFromDB: OrderFromDB
  try {
    orderFromDB = await addOrderToDatabase(order)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка оформления заказа." })
    return
  }
  console.log(orderFromDB)
  try {
    if (Number(process.env.NOTIFY_EMAIL)) {
      await notify.email(
        "Астрагал: Новый заказ.",
        composeOrderMessageText(orderFromDB)
      )
    }
  } catch (e) {
    if (!Number(process.env.NOTIFY_TELEGRAM)) {
      res.status(400).json({ message: "Ошибка оформления заказа." })
    }
    console.error(e)
  }
  try {
    if (Number(process.env.NOTIFY_TELEGRAM)) {
      await notify.telegram("Новый заказ", composeOrderMessageText(orderFromDB))
    }
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка оформления заказа." })
  }
  res.status(200).json({ message: "Заказ успешно оформлен." })
}
