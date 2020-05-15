import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const ProductList: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ProductListQuery>(graphql`
    query ProductList {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allSanityPost.edges.map(({ node }) => {
        return (
          <p>
            <Link to={`/products/${node.slug?.current}`}>{node.title}</Link>
          </p>
        )
      })}
    </>
  )
}
export default ProductList
