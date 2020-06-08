import classNames from "classnames"
import React from "react"
import {
  useAddItemToCart,
  useCartItemQuantity,
  useCartItems,
  useCartToggle,
} from "../hooks/contextHooks"

type Props = {
  _id: string
  inverse?: boolean
  size?: "small" | "big"
  bold?: boolean
} & Omit<JSX.IntrinsicElements["button"], "type" | "onClick">

const AddToCartButton: React.FC<Props> = ({
  _id,
  inverse = false,
  size = "small",
  className,
  ...rest
}) => {
  const [quantity] = useCartItemQuantity(_id)
  const addCartItem = useAddItemToCart()
  const setIsCartOpen = useCartToggle()[1]
  const cartItems = useCartItems()
  const commonClassNames = classNames(
    className,
    size === "small" && "w-full px-4 py-1.5 tracking-wide",
    size === "big" && "w-full px-16 py-4 lg:w-auto tracking-wider",
    "leading-none uppercase border-black border-2 rounded-none font-semibold"
  )
  if (_id in cartItems) {
    return (
      <button
        onClick={() => setIsCartOpen(true)}
        type="button"
        className={classNames(
          commonClassNames,
          inverse ? "text-gray-900 bg-white" : "text-gray-100 bg-black"
        )}
        {...rest}
      >
        Товар в корзине
      </button>
    )
  }
  return (
    <button
      onClick={() => addCartItem(_id, quantity + 1)}
      type="button"
      className={classNames(
        commonClassNames,
        inverse
          ? "text-gray-100 bg-black hover:bg-white hover:border-black focus:border-black hover:text-gray-900 focus:text-gray-900 focus:bg-white"
          : "text-gray-900 bg-white hover:text-gray-100 focus:text-gray-100 focus:bg-black hover:bg-black",
        "transition duration-300 ease-in-out"
      )}
      {...rest}
    >
      Купить
    </button>
  )
}

export default AddToCartButton
