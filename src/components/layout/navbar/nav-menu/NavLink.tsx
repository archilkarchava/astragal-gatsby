import classNames from "classnames"
import React from "react"
import IsomorphicAnchorLink from "../../../common/IsomorphicAnchorLink"

type Props = JSX.IntrinsicElements["li"] & { to: string }

const NavLink: React.FC<Props> = ({ className, children, to, ...rest }) => {
  return (
    <li
      className={classNames(
        { [className]: className },
        "block h-full leading-none text-sm text-gray-900"
      )}
      {...rest}
    >
      <IsomorphicAnchorLink
        className="flex items-center justify-center block h-full"
        stripHash
        to={to}
      >
        {children}
      </IsomorphicAnchorLink>
    </li>
  )
}

export default NavLink
