import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ImageQuery>(graphql`
    query Image {
      placeholderImage: sanityPost(slug: { current: { eq: "my-new-poast" } }) {
        coverImage {
          asset {
            localFile(width: 500) {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={
        data.placeholderImage?.coverImage?.asset?.localFile?.childImageSharp
          ?.fluid
      }
      alt="Астронавт"
    />
  )
}

export default Image
