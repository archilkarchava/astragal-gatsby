import classNames from "classnames"
import React from "react"

const NavItem: React.FC<JSX.IntrinsicElements["li"]> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <li
      className={classNames(
        { [className]: className },
        "block h-full leading-none text-sm text-gray-900 flex items-center justify-center"
      )}
      {...rest}
    >
      {children}
    </li>
  )
}

export default NavItem
