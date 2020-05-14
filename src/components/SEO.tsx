/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
  description?: string
  lang?: string
  meta?: JSX.IntrinsicElements["meta"][]
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "ru",
  meta = [],
  title,
}) => {
  const data = useStaticQuery<GatsbyTypes.SEOQuery>(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription: string =
    (description || data.site?.siteMetadata?.description) ?? ""

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site?.siteMetadata?.title}`}
      meta={[
        ...[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          // {
          //   name: `twitter:creator`,
          //   content: site.siteMetadata.author,
          // },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ],
        ...meta,
      ]}
    />
  )
}

export default SEO
