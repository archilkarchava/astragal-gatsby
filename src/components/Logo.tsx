import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"

interface Props {
  siteTitle?: string
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <h1 className="flex py-3 text-2xl md:p-0 md:text-4xl">
      <AnchorLink
        to="/#top"
        className="font-serif leading-none text-gray-900 no-underline"
      >
        {siteTitle}
      </AnchorLink>
    </h1>
  )
}

export default Logo
