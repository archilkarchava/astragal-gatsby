/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from "classnames"
import FocusTrap from "focus-trap-react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { Helmet } from "react-helmet"
import {
  useCartItemQuantity,
  useCartItems,
  useCartToggle,
  useCartTotalPrice,
  useRemoveItemFromCart,
} from "../hooks/contextHooks"
import useProducts from "../hooks/useProducts"
import formatPrice from "../utils/formatPrice"
import DecreaseIcon from "./icons/DecreaseIcon"
import GoBackIcon from "./icons/GoBackIcon"
import IncreaseIcon from "./icons/IncreaseIcon"

const Overlay: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  return (
    <div
      onClick={() => setIsCartOpen(false)}
      className={classNames(
        { [className]: className },
        isCartOpen
          ? "opacity-50 select-all pointer-events-auto"
          : "select-none pointer-events-none opacity-0",
        "fixed h-full w-full bg-white left-0 top-0 transition-opacity duration-300 ease-in-out z-30"
      )}
      {...rest}
    />
  )
}

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
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-between min-h-20 mr-2.5">
        <div>
          <p className="font-semibold leading-none">{title}</p>
          <p className="text-sm">{formatPrice(price)}</p>
        </div>
        <div className="">
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
            className={classNames(
              quantity <= 1 && "text-gray-700",
              "outline-none"
            )}
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

const Cart: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  const totalPrice = useCartTotalPrice()
  const cartItems = useCartItems()
  return (
    <div
      className={classNames(
        { [className]: className },
        isCartOpen ? "right-0" : "-right-full",
        "fixed top-0 z-40 w-full min-h-0 h-full max-w-md text-gray-100 duration-500 bg-black border border-black"
      )}
      {...rest}
    >
      <button
        aria-label="Закрыть корзину"
        type="button"
        className="absolute px-0.5 py-2 text-white left-6 top-4"
        onClick={() => setIsCartOpen(false)}
      >
        <GoBackIcon />
      </button>
      <div className="z-30 flex flex-col justify-between h-full max-h-full min-h-full pt-14 pb-7 px-7">
        <div className="border-b border-white">
          <h1 className="mb-5 leading-none tracking-widest text-center uppercase">
            Ваша корзина
          </h1>
        </div>
        {Object.keys(cartItems).length > 0 ? (
          <>
            <div className="mb-auto overflow-y-auto">
              {Object.keys(cartItems).map((productId) => (
                <CartItem key={productId} id={productId} />
              ))}
            </div>
            <div className="bg-black border-t border-white">
              <div className="flex flex-row items-start justify-between w-full my-8">
                <div className="text-xl">Всего</div>
                <div className="text-xl">{formatPrice(totalPrice)}</div>
              </div>
              <div className="w-full">
                <button
                  // ref={widgetRef}
                  type="button"
                  className="block py-4 mx-auto font-semibold tracking-wider text-gray-100 uppercase duration-300 ease-out bg-black border-2 border-white px-15 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full text-center">
              <h2 className="w-full text-4xl font-bold">В корзине пусто</h2>
            </div>
            <div>
              <Link
                onClick={() => setIsCartOpen(false)}
                to="/#catalog"
                className="block w-full py-4 font-semibold tracking-wider text-center text-gray-900 uppercase bg-white border-2 border-black"
              >
                Наш каталог товаров
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const CartWidget: React.FC = () => {
  const [isCartOpen] = useCartToggle()
  // const widgetRef = React.useRef(null)

  // React.useEffect(() => {
  //   if (isCartOpen) {
  //     widgetRef.current.focus()
  //   }
  // }, [isCartOpen])

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
