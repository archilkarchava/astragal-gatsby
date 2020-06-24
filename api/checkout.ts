import sanityClient from "@sanity/client"
import sgMail from "@sendgrid/mail"
import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import fetch from "isomorphic-fetch"
import { Store } from "../src/contexts/siteContext"
import {
  faunaGraphqlFetchMethodAndHeaders,
  faundaDbGraphQlEndpoint,
  fetchCustomerById,
} from "../src/utils/faunadbUtils"
import phoneNumberRegex from "../src/utils/phoneNumberRegex"
import serializeCustomerIdCookie from "../src/utils/serializeCustomerIdCookie"

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
  customer: {
    name: string
    phoneNumber: string
  }
  cartItems: Store["cartItems"]
}

interface OrderInput {
  customer: {
    id: string
    name: string
    phoneNumber: string
  }
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
  customer: {
    _id: string
    name: string
    phoneNumber: string
  }
  totalSum: number
  creationDate: string
}

const countOrderPrice = (cartItems: OrderInput["cartItems"]) => {
  const totalPrice = Object.values(cartItems).reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return totalPrice
}

const sendEmail = async ({
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
  const receivingEmail = process.env.RECEIVER_EMAIL
  const sendingEmail = process.env.SENDER_EMAIL

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: sendingEmail,
    to: receivingEmail,
    subject: "Астрагал: Новый заказ.",
    text: `Покупатель (${[idText, nameText, phoneNumberText]
      .filter((textStr) => textStr && textStr.length > 0)
      .join(", ")}) хочет сделать заказ на сумму ${totalSum} рублей.
Товары:
${items
  .map(
    ({ title, price, quantity }) =>
      `    ${title} - ${price} руб. в количестве ${quantity} шт.`
  )
  .join(",\n")}
`,
  }
  return sgMail.send(msg)
}

const createOrFetchCustomerIdInDatabase = async (
  customer: Omit<OrderInput["customer"], "orders">
) => {
  const createCustomerQuery = `mutation($customer: CustomerInput!) {
    createCustomer(data: $customer) {
      _id
    }
  }`
  let customerId: string
  if (customer.id) {
    const customerFromDb = await fetchCustomerById(customer.id)
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
        customerId: order.customer.id,
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
    id: customerIdFromCookie,
  })
  const order: OrderInput = {
    customer: {
      id: customerId,
      ...orderDto.customer,
    },
    cartItems,
    totalSum: countOrderPrice(cartItems),
  }

  let orderFromDB: OrderFromDB
  try {
    orderFromDB = await addOrderToDatabase(order)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка оформления заказа." })
    return
  }
  console.log(orderFromDB)
  res.setHeader("Set-Cookie", [serializeCustomerIdCookie(order.customer.id)])
  try {
    await sendEmail(orderFromDB)
    res.status(200).json({ message: "Заказ успешно оформлен." })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка оформления заказа." })
  }
}
