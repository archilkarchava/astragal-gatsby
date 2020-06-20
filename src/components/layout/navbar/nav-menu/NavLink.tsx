import React from "react"
import IsomorphicAnchorLink from "../../../common/IsomorphicAnchorLink"

interface Props {
  to: string
}

const NavLink: React.FC<Props> = ({ children, to }) => {
  return (
    <IsomorphicAnchorLink
      className="flex flex-col justify-center block h-full"
      stripHash
      to={to}
    >
      {children}
    </IsomorphicAnchorLink>
  )
}

export default NavLink
