import classNames from "classnames"
import React from "react"

const Anchor: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  id,
  ...rest
}) => {
  return (
    <div
      id={id}
      className={classNames("-translate-y-13 md:-translate-y-16", className)}
      {...rest}
    />
  )
}

export default Anchor
