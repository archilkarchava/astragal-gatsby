import sanityClient from "@sanity/client"
import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import fetch from "isomorphic-fetch"
import composeOrderMessageText from "../api-modules/composeOrderMessageText"
import emailSendMessage from "../api-modules/emailSendMessage"
import {
  faunaGraphqlFetchMethodAndHeaders,
  faundaDbGraphQlEndpoint,
  fetchCustomerById,
} from "../api-modules/faunadb"
import serializeCustomerIdCookie from "../api-modules/serializeCustomerIdCookie"
import telegramSendMessage from "../api-modules/telegramSendMessage"
import type { Customer, OrderFromDB } from "../api-types"
import { Store } from "../src/contexts/siteContext"
import phoneNumberRegex from "../src/utils/phoneNumberRegex"

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
  customer: Omit<Customer, "id">
  cartItems: Store["cartItems"]
}

interface OrderInput {
  customer: Customer
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

const notifyEmail = async (orderMessage: OrderFromDB) => {
  return emailSendMessage(
    "Астрагал: Новый заказ.",
    composeOrderMessageText(orderMessage)
  )
}

const notifyTelegram = async (orderMessage: OrderFromDB) => {
  return telegramSendMessage(
    "Новый заказ",
    composeOrderMessageText(orderMessage)
  )
}

const createOrFetchCustomerIdInDatabase = async (customer: Customer) => {
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
    if (Number(process.env.NOTIFY_EMAIL)) {
      await notifyEmail(orderFromDB)
    }
  } catch (e) {
    console.error(e)
  }
  try {
    if (Number(process.env.NOTIFY_TELEGRAM)) {
      await notifyTelegram(orderFromDB)
    }
    res.status(200).json({ message: "Заказ успешно оформлен." })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка оформления заказа." })
  }
}
