import React from "react"
import IsomorphicAnchorLink from "./IsomorphicAnchorLink"

interface Props {
  siteTitle?: string
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <h1 className="flex py-3 text-2xl md:p-0 md:text-4xl">
      <IsomorphicAnchorLink
        to="/#top"
        stripHash
        className="font-serif leading-none text-gray-900 no-underline"
      >
        {siteTitle}
      </IsomorphicAnchorLink>
    </h1>
  )
}

export default Logo
