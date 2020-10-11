import sgMail from "@sendgrid/mail"
import TelegramBot from "node-telegram-bot-api"

// Remove deprecation warning message
process.env.NTBA_FIX_319 = "1"

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const notify = {
  telegram: async (
    title: string,
    body: string,
    options?: TelegramBot.SendMessageOptions
  ) => {
    return bot.sendMessage(
      process.env.TELEGRAM_CHAT_ID,
      `<strong>${title}</strong>\n${body}`,
      {
        ...options,
        parse_mode:
          options && "parse_mode" in options ? options.parse_mode : "HTML",
      }
    )
  },
  email: async (subject: string, body: string) => {
    const msg = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject,
      text: body,
    }
    return sgMail.send(msg)
  },
}

export default notify
