/* eslint-disable no-console */
import sgMail from "@sendgrid/mail"
import type { NowRequest, NowResponse } from "@vercel/node" // eslint-disable-line import/no-extraneous-dependencies
import phoneNumberRegex from "../src/utils/phoneNumberRegex"

interface MessageDto {
  name: string
  phoneNumber: string
  message: string
}

const sendEmail = async ({ name, phoneNumber, message }: MessageDto) => {
  const receivingEmail = process.env.RECEIVER_EMAIL
  const sendingEmail = process.env.SENDER_EMAIL

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: sendingEmail,
    to: receivingEmail,
    subject: "Астрагал: Новое сообщение.",
    text: `Пользователь (${name} ${phoneNumber}) отправил сообщение.
Сообщение:
${message}
`,
  }
  return sgMail.send(msg)
}

export default async (req: NowRequest, res: NowResponse) => {
  const { body } = req
  if (
    !body.name ||
    !body.phoneNumber.match(phoneNumberRegex) ||
    !body.message
  ) {
    res.status(422).json({ message: "Данные введены неверно." })
    return
  }
  try {
    await sendEmail(body)
    res.status(200).json({ message: "Сообщение успешно доставлено." })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Ошибка отправки сообщения." })
  }
}
