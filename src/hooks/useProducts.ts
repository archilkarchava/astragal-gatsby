import { graphql, useStaticQuery } from "gatsby"

const useProducts = (): {
  [_id: string]: Omit<GatsbyTypes.SanityProduct, "_id">
} => {
  const { allSanityProduct } = useStaticQuery<
    GatsbyTypes.ProductsQuery
  >(graphql`
    query Products {
      allSanityProduct {
        edges {
          node {
            _id
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
                    fluid(maxWidth: 240) {
                      ...GatsbyImageSharpFluid
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

  return allSanityProduct.edges.reduce(
    (acc, { node: { _id, ...rest } }) => Object.assign(acc, { [_id]: rest }),
    {}
  )
}

export default useProducts
