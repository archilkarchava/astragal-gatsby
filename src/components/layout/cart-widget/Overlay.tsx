/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from "clsx"
import React from "react"
import { useCartToggle } from "../../../hooks/contextHooks"

const Overlay: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  return (
    <div
      onClick={() => setIsCartOpen(false)}
      className={clsx(
        { [className]: className },
        isCartOpen
          ? "opacity-50 select-all pointer-events-auto"
          : "select-none pointer-events-none opacity-0",
        "fixed h-full w-full bg-white left-0 top-0 transition-opacity duration-300 ease-in-out z-40"
      )}
      {...rest}
    />
  )
}

export default Overlay
