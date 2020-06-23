import { serialize } from "cookie"

const serializeCustomerIdCookie = (customerId: string) =>
  serialize("customerId", customerId, {
    expires: new Date(new Date().getTime() + 10 * 365 * 24 * 60 * 60 * 1000),
    path: "/",
  })

export default serializeCustomerIdCookie
