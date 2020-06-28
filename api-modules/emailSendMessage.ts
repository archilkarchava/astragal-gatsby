import sgMail from "@sendgrid/mail"

const emailSendMessage = (subject: string, body: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject,
    text: body,
  }
  return sgMail.send(msg)
}

export default emailSendMessage
