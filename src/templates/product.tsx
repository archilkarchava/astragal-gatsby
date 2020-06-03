import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import ProductBody from "../components/ProductBody"
import formatPrice from "../utils/formatPrice"

export const pageQuery = graphql`
  query Post($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      title
      price
      oldPrice
      sizes {
        depth
        height
        length
      }
      materials {
        title
      }
      images {
        asset {
          localFile {
            childImageSharp {
              fluid(webpQuality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

interface Props {
  data: GatsbyTypes.PostQuery
}

const ProductTemplate: React.FC<Props> = ({ data: { sanityProduct } }) => {
  if (!sanityProduct) {
    throw new Error("Did not receive any data.")
  }
  return (
    <Layout>
      {sanityProduct.images.length &&
        sanityProduct.images[0].asset.localFile && (
          <Image
            fluid={
              sanityProduct.images[0]?.asset?.localFile?.childImageSharp?.fluid
            }
            alt={sanityProduct.title}
          />
        )}
      <h1>{sanityProduct.title}</h1>
      {sanityProduct.price > 0 && (
        <p>
          {/* ₽
            {sanityProduct.defaultProductVariant.price.toLocaleString("ru", {
              style: "currency",
              currency: "RUB",
            })} */}
          {formatPrice(sanityProduct.price)}
        </p>
      )}
      {sanityProduct._rawBody && (
        <ProductBody content={sanityProduct._rawBody} />
      )}
      {/* <Link to="/">Вернуться на главную</Link> */}
    </Layout>
  )
}

export default ProductTemplate
