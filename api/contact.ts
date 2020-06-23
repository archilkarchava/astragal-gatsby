/* eslint-disable no-console */
import sgMail from "@sendgrid/mail"
import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import emailRegex from "../src/utils/emailRegex"
import { fetchCustomerById } from "../src/utils/faunadbUtils"

interface MessageDto {
  name: string
  email: string
  message: string
}

interface SendEmailInput {
  customer?: {
    _id: string
    name: string
    phoneNumber?: string
  }
  currentCustomerName: string
  currentCustomerEmail: string
  message: string
}

const sendEmail = async ({
  customer,
  currentCustomerName,
  currentCustomerEmail,
  message,
}: SendEmailInput) => {
  const receivingEmail = process.env.RECEIVER_EMAIL
  const sendingEmail = process.env.SENDER_EMAIL
  let idText: string
  let nameText: string
  let phoneNumberText: string
  if (customer) {
    idText = `ID: ${customer._id}`
    nameText =
      customer.name === currentCustomerName
        ? `Имя: ${customer.name}`
        : `Имя: ${currentCustomerName} (в прошлом ${customer.name})`
    phoneNumberText =
      customer.phoneNumber && `Номер телефона: ${customer.phoneNumber}`
  } else {
    nameText = `Имя: ${currentCustomerName}`
  }
  const emailText = `Email: ${currentCustomerEmail}`
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: sendingEmail,
    to: receivingEmail,
    subject: "Астрагал: Новое сообщение.",
    text: `Пользователь (${[idText, nameText, phoneNumberText, emailText]
      .filter((textStr) => textStr && textStr.length > 0)
      .join(", ")}) отправил сообщение.
Сообщение:
${message}
`,
  }
  return sgMail.send(msg)
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
    await sendEmail({
      currentCustomerName: body.name,
      currentCustomerEmail: body.email,
      message: body.message,
      ...(customerFromDb && { customer: customerFromDb }),
    })
    res.status(200).json({ message: "Сообщение успешно доставлено." })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка отправки сообщения." })
  }
}
