import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import notify from "../api-modules/notify"
import { CustomerFromDB } from "../api-modules/types/api-types"
import { fetchCustomerById } from "../api-modules/utils/faunadb"
import emailRegex from "../src/utils/emailRegex"

export interface ContactMessage {
  customer?: CustomerFromDB
  currentMessengerName: string
  currentMessengerEmail: string
  message: string
}

const composeContactMessageText = ({
  customer,
  currentMessengerName,
  currentMessengerEmail,
  message,
}: ContactMessage) => {
  let idText: string
  let nameText: string
  let phoneNumberText: string
  if (customer) {
    idText = `ID: ${customer._id}`
    nameText =
      customer.name === currentMessengerName
        ? `Имя: ${customer.name}`
        : `Имя: ${currentMessengerName} (в прошлом ${customer.name})`
    phoneNumberText =
      customer.phoneNumber && `Номер телефона: ${customer.phoneNumber}`
  } else {
    nameText = `Имя: ${currentMessengerName}`
  }
  const emailText = `Email: ${currentMessengerEmail}`
  return `${idText ? "Покупатель" : "Пользователь"} (${[
    idText,
    nameText,
    phoneNumberText,
    emailText,
  ]
    .filter((textStr) => textStr && textStr.length > 0)
    .join(", ")}) отправил сообщение.
Сообщение:
${message}
`
}

interface MessageDto {
  name: string
  email: string
  message: string
}

export default async (req: NowRequest, res: NowResponse) => {
  const { body }: { body: MessageDto } = req
  if (!body.name || !body.email.match(emailRegex) || !body.message) {
    res.status(422).json({ message: "Данные введены неверно." })
    return
  }
  const { customerId: customerIdFromCookie } = req.cookies
  const customerFromDb = await fetchCustomerById(customerIdFromCookie)
  const contactMessageText = composeContactMessageText({
    currentMessengerName: body.name,
    currentMessengerEmail: body.email,
    message: body.message,
    ...(customerFromDb && { customer: customerFromDb }),
  })
  try {
    if (Number(process.env.NOTIFY_EMAIL)) {
      await notify.email("Астрагал: Новое сообщение.", contactMessageText)
    }
  } catch (e) {
    if (!Number(process.env.NOTIFY_TELEGRAM)) {
      res.status(400).json({ message: "Ошибка отправки сообщения." })
    }
    console.error(e)
  }
  try {
    if (Number(process.env.NOTIFY_TELEGRAM)) {
      await notify.telegram("Новое сообщение", contactMessageText)
    }
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка отправки сообщения." })
  }
  res.status(200).json({ message: "Сообщение успешно доставлено." })
}
