import classNames from "classnames"
import React from "react"
import IsomorphicAnchorLink from "../../../common/IsomorphicAnchorLink"

type Props = JSX.IntrinsicElements["li"] & { to: string }

const NavLink: React.FC<Props> = ({ className, children, to, ...rest }) => {
  return (
    <li
      className={classNames(
        { [className]: className },
        "block h-full leading-none mr-6 text-sm text-gray-900 md:mr-10"
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
