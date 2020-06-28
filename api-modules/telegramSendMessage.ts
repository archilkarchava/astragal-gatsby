import TelegramBot from "node-telegram-bot-api"

// Deprecation message
process.env.NTBA_FIX_319 = "1"

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)

const telegramSendMessage = async (
  title: string,
  body: string,
  options?: TelegramBot.SendMessageOptions
) => {
  return bot.sendMessage(
    process.env.TELEGRAM_CHAT_ID,
    `<strong>${title}</strong>\n${body}`,
    {
      ...options,
      // eslint-disable-next-line @typescript-eslint/camelcase
      parse_mode:
        options && "parse_mode" in options ? options.parse_mode : "HTML",
    }
  )
}

export default telegramSendMessage
