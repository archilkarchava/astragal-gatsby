import FocusTrap from "focus-trap-react"
import React from "react"
import { Helmet } from "react-helmet"
import { useCartToggle } from "../../../hooks/contextHooks"
import Cart from "./cart"
import Overlay from "./Overlay"

const CartWidget: React.FC = () => {
  const [isCartOpen] = useCartToggle()

  return (
    <>
      <Helmet
        bodyAttributes={
          isCartOpen
            ? {
                class: "overflow-hidden",
              }
            : undefined
        }
      />
      <FocusTrap active={isCartOpen}>
        <div>
          <Overlay />
          <Cart />
        </div>
      </FocusTrap>
    </>
  )
}

export default CartWidget
