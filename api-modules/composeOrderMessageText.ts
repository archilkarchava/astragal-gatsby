import type { OrderFromDB } from "../api-types"

const composeOrderMessageText = ({
  customer,
  items,
  totalSum,
  currentCustomerName,
  currentCustomerPhone,
}: OrderFromDB) => {
  const idText = `ID: ${customer._id}`
  const nameText =
    customer.name === currentCustomerName
      ? `Имя: ${customer.name}`
      : `Имя: ${currentCustomerName} (в прошлом ${customer.name})`
  const phoneNumberText =
    customer.phoneNumber === currentCustomerPhone
      ? `Номер телефона: ${customer.phoneNumber}`
      : `Номер телефона: ${currentCustomerPhone} (в прошлом ${customer.phoneNumber})`
  return `Покупатель (${[idText, nameText, phoneNumberText]
    .filter((textStr) => textStr && textStr.length > 0)
    .join(", ")}) хочет сделать заказ на сумму ${totalSum} рублей.
Товары:
${items
  .map(
    ({ title, price, quantity }) =>
      `    ${title} - ${price} руб. в количестве ${quantity} шт.`
  )
  .join(",\n")}
`
}

export default composeOrderMessageText
