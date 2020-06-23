import fetch from "isomorphic-fetch"

export const faundaDbGraphQlEndpoint = "https://graphql.fauna.com/graphql"

export const faunaGraphqlFetchMethodAndHeaders = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
    "Content-type": "application/json",
    Accept: "application/json",
  },
}

export const fetchCustomerById = async (
  customerId: string
): Promise<{ _id: string; name: string; phoneNumber: string } | null> => {
  const fetchCustomerQuery = `query($customerId: ID!) {
      findCustomerByID(id: $customerId) {
        _id
        name
        phoneNumber
      }
    }`
  const res = await fetch(faundaDbGraphQlEndpoint, {
    ...faunaGraphqlFetchMethodAndHeaders,
    body: JSON.stringify({
      query: fetchCustomerQuery,
      variables: {
        customerId,
      },
    }),
  })
  const { data } = await res.json()
  if (!data || !data.findCustomerByID) {
    return null
  }
  return data.findCustomerByID
}
