/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from "classnames"
import FocusTrap from "focus-trap-react"
import BackgroundImage from "gatsby-background-image"
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

const GoBackIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    width={38}
    height={11}
    viewBox="0 0 38 11"
    fill="currentColor"
    {...props}
  >
    <desc>Иконка вернуться назад</desc>
    <path
      fillRule="evenodd"
      d="M5.665 0L1.063 4.469l-.001-.002L0 5.498v.004l1.062 1.031.001-.001L5.665 11 6.73 9.967 2.878 6.229h35.121V4.771H2.878l3.852-3.74z"
    />
  </svg>
)

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

const IncreaseIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6407 15.7678C18.0648 15.4139 18.1216 14.7833 17.7677 14.3593L12.7602 8.35925C12.5701 8.13146 12.2886 7.99985 11.9919 8.00001C11.6952 8.00016 11.4139 8.13206 11.224 8.36006L6.23158 14.3547C5.87814 14.7791 5.93566 15.4096 6.36005 15.7631C6.78443 16.1165 7.41498 16.059 7.76841 15.6346L11.9932 10.5616L16.2322 15.6408C16.5861 16.0648 17.2167 16.1216 17.6407 15.7678Z"
      />
    </svg>
  )
}
const DecreaseIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6407 8.23225C18.0648 8.58613 18.1216 9.21674 17.7677 9.64075L12.7602 15.6407C12.5701 15.8685 12.2886 16.0001 11.9919 16C11.6952 15.9998 11.4139 15.8679 11.224 15.6399L6.23158 9.64529C5.87814 9.2209 5.93566 8.59035 6.36005 8.23692C6.78443 7.88349 7.41498 7.941 7.76841 8.36539L11.9932 13.4384L16.2322 8.35924C16.5861 7.93522 17.2167 7.87837 17.6407 8.23225Z"
      />
    </svg>
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
    <div className="relative flex items-end flex-shrink w-full py-4 border-b border-white">
      <div className="flex flex-col justify-evenly mr-2.5">
        <div className="w-18 h-18">
          <BackgroundImage className="w-full h-full" fluid={imageFluid} />
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-evenly mr-2.5">
        <p className="font-semibold leading-none">{title}</p>
        <p className="text-sm">{formatPrice(price)}</p>
        <div className="mt-2">
          <button
            type="button"
            onClick={() => removeCartItem(id)}
            className="text-xs"
          >
            Удалить
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse px-2 text-sm font-normal uppercase">
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
        "fixed top-0 z-40 w-full h-full max-w-md text-gray-100 duration-500 bg-black border border-black"
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
      <div className="z-30 flex flex-col justify-between max-h-full min-h-full pt-14 pb-7 px-7">
        <div className="flex flex-col border-b border-white">
          <h1 className="mb-5 leading-none tracking-widest text-center uppercase">
            Ваша корзина
          </h1>
        </div>
        {Object.keys(cartItems).length > 0 ? (
          <>
            <div className="flex flex-col flex-grow flex-shrink overflow-y-auto">
              {Object.keys(cartItems).map((productId) => (
                <CartItem key={productId} id={productId} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center bg-black border-t border-white">
              <div className="flex flex-row items-start justify-between w-full my-4">
                <div className="text-lg font-bold">Всего</div>
                <div className="text-lg font-bold">
                  {formatPrice(totalPrice)}
                </div>
              </div>
              <button
                // ref={widgetRef}
                type="button"
                className="py-4 font-semibold tracking-wider text-gray-100 uppercase duration-300 ease-out bg-black border-2 border-white px-15 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900"
              >
                Купить
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center content-center w-full text-center">
              <h2 className="w-full text-4xl font-bold">В корзине пусто</h2>
            </div>
            <div>
              <a
                onClick={() => setIsCartOpen(false)}
                href="/#catalog"
                className="block w-full py-4 font-semibold tracking-wider text-center text-gray-900 uppercase bg-white border-2 border-black"
              >
                Наш каталог товаров
              </a>
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
                class: "overflow-y-hidden",
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
