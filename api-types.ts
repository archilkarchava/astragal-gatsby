export interface Customer {
  id: string
  name: string
  phoneNumber: string
}

export interface OrderFromDB {
  _id: string
  currentCustomerName: string
  currentCustomerPhone: string
  items: {
    productId: string
    title: string
    price: number
    oldPrice: number
    quantity: number
  }[]
  customer: {
    _id: string
    name: string
    phoneNumber: string
  }
  totalSum: number
  creationDate: string
}
