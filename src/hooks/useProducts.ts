import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
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
    [_id: string]: Omit<GatsbyTypes.SanityProduct, "_id">
  } = allSanityProduct.edges.reduce(
    (acc, { node: { _id, ...rest } }) => Object.assign(acc, { [_id]: rest }),
    {}
  )

  return result
}

export default useProducts
