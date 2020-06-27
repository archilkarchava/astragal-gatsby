import clsx from "clsx"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import {
  useCartItemQuantity,
  useRemoveItemFromCart,
} from "../../../../../hooks/contextHooks"
import useProducts from "../../../../../hooks/useProducts"
import formatPrice from "../../../../../utils/formatPrice"
import DecreaseIcon from "./DecreaseIcon"
import IncreaseIcon from "./IncreaseIcon"

const CartItem: React.FC<{
  id: string
}> = ({ id }) => {
  const products = useProducts()
  const { title, price, images } = products[id]
  const {
    asset: {
      localFile: {
        childImageSharp: { fluid: imageFluid },
      },
    },
  } = images[0]
  const [quantity, setQuantity] = useCartItemQuantity(id)
  const removeCartItem = useRemoveItemFromCart()
  return (
    <div className="flex w-full py-4 border-b border-white">
      <div className="flex flex-col justify-evenly mr-2.5">
        <div className="w-20 h-20">
          <Image
            className="w-full h-full"
            fluid={imageFluid}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-between w-62.5 min-h-20 mr-2.5">
        <div>
          <p className="text-sm font-semibold leading-4">{title}</p>
          <p className="text-sm">{formatPrice(price)}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => removeCartItem(id)}
            className="text-xs"
          >
            Удалить
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse px-2 my-auto text-sm font-normal">
        <div className="flex flex-grow-0 flex-shrink-0">
          <button
            type="button"
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
            className={clsx(quantity <= 1 && "text-gray-700", "outline-none")}
          >
            <DecreaseIcon />
          </button>
        </div>
        <div className="flex items-center justify-center flex-grow flex-shrink">
          <span className="">{quantity}</span>
        </div>
        <div className="flex flex-grow-0 flex-shrink-0">
          <button type="button" onClick={() => setQuantity(quantity + 1)}>
            <IncreaseIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
