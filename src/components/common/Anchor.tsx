import clsx from "clsx"
import React from "react"

const Anchor: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  id,
  ...rest
}) => {
  return (
    <div
      id={id}
      className={clsx("-translate-y-13 md:-translate-y-16", className)}
      {...rest}
    />
  )
}

export default Anchor
