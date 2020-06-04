import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const { allSanityProduct } = useStaticQuery<
    GatsbyTypes.ProductsQuery
  >(graphql`
    query Products {
      allSanityProduct {
        edges {
          node {
            id
            title
            price
            oldPrice
            slug {
              current
            }
            images {
              asset {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, webpQuality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const result: {
    [id: string]: Omit<GatsbyTypes.SanityProduct, "id">
  } = allSanityProduct.edges.reduce(
    (acc, { node: { id, ...rest } }) => Object.assign(acc, { [id]: rest }),
    {}
  )

  return result
}

export default useProducts
