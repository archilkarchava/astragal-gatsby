import React from "react"
import IsomorphicAnchorLink from "../../common/IsomorphicAnchorLink"

interface Props {
  siteTitle?: string
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <IsomorphicAnchorLink
      to="/#top"
      stripHash
      className="font-serif leading-none text-gray-900 no-underline"
    >
      <h1 className="flex py-3 text-2xl md:text-4xl">{siteTitle}</h1>
    </IsomorphicAnchorLink>
  )
}

export default Logo
