import clsx from "clsx"
import React from "react"

const NavItem: React.FC<JSX.IntrinsicElements["li"]> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <li
      className={clsx(
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
