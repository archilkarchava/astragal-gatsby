import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import composeContactMessageText from "../api-modules/composeContactMessageText"
import type { ContactMessage } from "../api-modules/composeContactMessageText"
import emailSendMessage from "../api-modules/emailSendMessage"
import { fetchCustomerById } from "../api-modules/faunadb"
import telegramSendMessage from "../api-modules/telegramSendMessage"
import emailRegex from "../src/utils/emailRegex"

interface MessageDto {
  name: string
  email: string
  message: string
}

const notifyEmail = async (contactMessage: ContactMessage) => {
  return emailSendMessage(
    "Астрагал: Новое сообщение.",
    composeContactMessageText(contactMessage)
  )
}

const notifyTelegram = async (contactMessage: ContactMessage) => {
  return telegramSendMessage(
    "Новое сообщение",
    composeContactMessageText(contactMessage)
  )
}

export default async (req: NowRequest, res: NowResponse) => {
  const { body }: { body: MessageDto } = req
  if (!body.name || !body.email.match(emailRegex) || !body.message) {
    res.status(422).json({ message: "Данные введены неверно." })
    return
  }
  const { customerId: customerIdFromCookie } = req.cookies
  const customerFromDb = await fetchCustomerById(customerIdFromCookie)
  try {
    if (Number(process.env.NOTIFY_EMAIL)) {
      await notifyEmail({
        currentCustomerName: body.name,
        currentCustomerEmail: body.email,
        message: body.message,
        ...(customerFromDb && { customer: customerFromDb }),
      })
    }
  } catch (e) {
    console.error(e)
  }
  try {
    if (Number(process.env.NOTIFY_TELEGRAM)) {
      await notifyTelegram({
        currentCustomerName: body.name,
        currentCustomerEmail: body.email,
        message: body.message,
        ...(customerFromDb && { customer: customerFromDb }),
      })
    }
    res.status(200).json({ message: "Сообщение успешно доставлено." })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка отправки сообщения." })
  }
}
