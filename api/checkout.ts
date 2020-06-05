/* eslint-disable no-console */
import sanityClient from "@sanity/client"
import type { NowRequest, NowResponse } from "@vercel/node"
import nodemailer from "nodemailer"
import { Store } from "../src/contexts/siteContext"

const sanity = sanityClient({
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
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
  const cartItems: Order["cartItems"] = {}
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

type OrderDto = Pick<Store, "customer" | "cartItems">

interface Order {
  customer: OrderDto["customer"]
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

const receivingEmail = process.env.EMAIL_RECEIVER
const gmailEmail = process.env.GMAIL_SENDER_EMAIL
const gmailPassword = process.env.GMAIL_SENDER_PASSWORD
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

const countOrderPrice = (cartItems: Order["cartItems"]) => {
  const totalPrice = Object.values(cartItems).reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return totalPrice
}

const sendEmail = async ({
  customer,
  cartItems,
  totalSum,
}: Order): Promise<number> => {
  const mailOptions = {
    from: gmailEmail,
    to: receivingEmail,
    subject: "Астрагал: Новый заказ.",
    text: `
${customer.name} ${
      customer.phoneNumber
    } хочет сделать заказ на сумму ${totalSum} рублей.
Товары:
${Object.values(cartItems)
  .map(
    ({ title, price, quantity }) =>
      `   ${title} - ${price} руб. в количестве ${quantity} шт.,`
  )
  .join("\n")}`,
  }
  try {
    await mailTransport.sendMail(mailOptions)
    console.log(`Информация о заказе отправлена на: ${receivingEmail}`)
  } catch (e) {
    throw new Error(
      `Ошибка отправки с ${gmailEmail} на ${receivingEmail}: ${e}`
    )
  }
  return null
}

export default async (req: NowRequest, res: NowResponse) => {
  const orderDto: OrderDto = req.body
  let cartItems: Order["cartItems"]
  try {
    cartItems = await fetchOrderProducts(orderDto.cartItems)
  } catch (error) {
    res.status(400).send({ message: "Не получилось загрузить товары." })
  }
  if (!cartItems) {
    res.status(400).send({ message: "Не получилось загрузить товары." })
  }
  const order: Order = {
    customer: orderDto.customer,
    cartItems,
    totalSum: countOrderPrice(cartItems),
  }
  console.log(order)
  sendEmail(order)
    .then(() => res.status(200).send({ message: "Заказ успешно оформлен." }))
    .catch(() => res.status(400).send({ message: "Ошибка оформления заказа." }))
  // const { name = "World" } = req.query
}
