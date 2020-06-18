import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

interface Props {
  description?: string
  lang?: string
  meta?: JSX.IntrinsicElements["meta"][]
  title: string
}

const SEO: React.FC<Props> = ({
  description = "",
  lang = "ru",
  meta = [],
  title,
}) => {
  const siteInfo = useSiteMetadata()

  const metaDescription: string = (description || siteInfo.description) ?? ""

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteInfo.title}`}
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
