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

  const result = new Map(
    allSanityProduct.edges.map(({ node: { id, ...rest } }) => [id, rest])
  )

  return result
}

export default useProducts
