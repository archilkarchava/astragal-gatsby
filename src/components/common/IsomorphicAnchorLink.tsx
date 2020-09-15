import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import type { AnchorLinkProps } from "gatsby-plugin-anchor-links"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"

const IsomorphicAnchorLink: React.FC<AnchorLinkProps> = ({
  to,
  stripHash,
  ...rest
}) => {
  const location = useLocation()
  if (typeof window !== "undefined" && stripHash) {
    window.history.replaceState(null, null, " ")
  }
  if (location.pathname === to.replace(/#.*$/, "")) {
    return <AnchorLink to={to} stripHash={stripHash} {...rest} />
  }
  return <Link to={to} {...rest} />
}

export default IsomorphicAnchorLink
