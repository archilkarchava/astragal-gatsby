export interface ContactMessage {
  customer?: {
    _id: string
    name: string
    phoneNumber?: string
  }
  currentCustomerName: string
  currentCustomerEmail: string
  message: string
}

const composeContactMessageText = ({
  customer,
  currentCustomerName,
  currentCustomerEmail,
  message,
}: ContactMessage) => {
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

export default composeContactMessageText
