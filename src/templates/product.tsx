import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import ProductBody from "../components/ProductBody"

export const query = graphql`
  query Post($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      author {
        name
        picture {
          asset {
            localFile {
              childImageSharp {
                fluid(webpQuality: 90, maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
      coverImage {
        asset {
          localFile(width: 2000, height: 1000) {
            childImageSharp {
              fluid(webpQuality: 90) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      date
      _rawContent(resolveReferences: { maxDepth: 5 })
    }
  }
`

interface Props {
  data: GatsbyTypes.PostQuery
}

const ProductTemplate: React.FC<Props> = ({ data: { sanityPost } }) => {
  return (
    <Layout>
      <Image
        fluid={sanityPost?.coverImage?.asset?.localFile?.childImageSharp?.fluid}
        alt={sanityPost?.title}
      />
      <h1>{sanityPost?.title}</h1>
      <p>{sanityPost?.date}</p>
      <ProductBody content={sanityPost?._rawContent} />
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default ProductTemplate
