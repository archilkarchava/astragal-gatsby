import React from "react"
import {
  useCartToggle,
  useCartTotalQuantity,
} from "../../../../../hooks/contextHooks"
import BagIcon from "./BagIcon"

const CartButton: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  const itemCount = useCartTotalQuantity()
  return (
    <button
      type="button"
      aria-label="Открыть корзину"
      className="h-full leading-none text-gray-900"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <BagIcon className="w-7 h-7" />
      <div className="absolute text-xs leading-8 text-white -translate-y-full w-7 h-7">
        {itemCount}
      </div>
    </button>
  )
}

export default CartButton
