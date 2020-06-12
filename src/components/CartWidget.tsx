/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from "classnames"
import FocusTrap from "focus-trap-react"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { Store } from "../contexts/siteContext"
import {
  useCartItemQuantity,
  useCartItems,
  useCartToggle,
  useCartTotalPrice,
  useCustomer,
  useOrderStatus,
  useRemoveItemFromCart,
  useUpdateItemsFromCart,
} from "../hooks/contextHooks"
import useProducts from "../hooks/useProducts"
import formatPrice from "../utils/formatPrice"
import DecreaseIcon from "./icons/DecreaseIcon"
import GoBackIcon from "./icons/GoBackIcon"
import IncreaseIcon from "./icons/IncreaseIcon"
import IsomorphicAnchorLink from "./IsomorphicAnchorLink"

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
            objectFit="contain"
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

const OrderForm: React.FC = () => {
  const [isCartOpen] = useCartToggle()
  const totalPrice = useCartTotalPrice()
  const [customer, setCustomer] = useCustomer()
  const cartItems = useCartItems()
  const updateCartItems = useUpdateItemsFromCart()
  const [orderStatus, setOrderStatus] = useOrderStatus()
  const nameInputRef = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    if (isCartOpen) {
      nameInputRef.current.focus()
    }
  }, [isCartOpen])

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })

  const onSubmit = async (data: { name: string; phone: string }) => {
    setCustomer({ name: data.name, phoneNumber: data.phone })
    setOrderStatus("pending")
    const order: Omit<Store, "isCartOpen" | "isNavOpen" | "orderStatus"> = {
      customer,
      cartItems,
    }

    order.cartItems = Object.entries(order.cartItems).reduce(
      (acc: typeof order.cartItems, [_id, val]) => {
        const newId = _id.replace("drafts.", "")
        return Object.assign(acc, { [newId]: val })
      },
      {}
    )

    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        if (!res.ok) {
          throw res
        }
        return res.json()
      })
      .then(() => {
        setOrderStatus("success")
        updateCartItems({})
      })
      .catch(() => setOrderStatus("failure"))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-4 text-gray-100 border-t border-white">
        <div>
          <p className="mb-1 text-sm">Ваше имя</p>
          <input
            ref={(e) => {
              register(e, {
                required: { message: "Введите ваше имя.", value: true },
              })
              nameInputRef.current = e
            }}
            name="name"
            className="w-full p-2 text-gray-900 bg-gray-100 rounded-none"
            type="text"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
          <div className="h-6 text-sm text-red-500">
            {errors.name && errors.name.message}
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm">Номер телефона</p>
          <InputMask
            type="tel"
            className="w-full p-2 text-gray-900 bg-gray-100 rounded-none"
            value={customer.phoneNumber}
            name="phone"
            inputRef={register({
              required: { message: "Введите номер телефона.", value: true },
              pattern: {
                value: /^(\+7) ((\(\d{3}\))|(\d{3}(-?))) ((\d{7})|(\d{3}-\d{2}-\d{2}))$/,
                message: "Введите корректный номер телефона.",
              },
            })}
            mask="+7 (999) 999-99-99"
            maskChar={null}
            onChange={(e) =>
              setCustomer({ ...customer, phoneNumber: e.target.value })
            }
          />

          <div className="h-6 text-sm text-red-500">
            {errors.phone && errors.phone.message}
          </div>
        </div>
      </div>
      <div className="border-t border-white">
        <div className="flex flex-row items-start justify-between w-full my-8">
          <div className="text-lg leading-none">Всего</div>
          <div className="text-lg leading-none">{formatPrice(totalPrice)}</div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            aria-label="Оформить заказ"
            className="block py-4 mx-auto font-semibold tracking-wider text-gray-100 uppercase duration-300 ease-out bg-black border-2 border-white px-15 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900"
          >
            {orderStatus === "pending" ? "Подождите..." : "Оформить заказ"}
          </button>
        </div>
      </div>
    </form>
  )
}

const Cart: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  const cartItems = useCartItems()

  const [orderStatus, setOrderStatus] = useOrderStatus()

  React.useEffect(() => {
    if (
      !isCartOpen &&
      (orderStatus === "success" || orderStatus === "failure")
    ) {
      setOrderStatus("idle")
    }
  }, [isCartOpen, orderStatus, setOrderStatus])

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setIsCartOpen(false)
      }
    },
    [setIsCartOpen]
  )

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [escFunction])

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
        className="absolute px-0.5 py-2 text-white left-6 top-6"
        onClick={() => setIsCartOpen(false)}
      >
        <GoBackIcon />
      </button>
      <div className="z-30 flex flex-col justify-between h-full max-h-full min-h-full py-7 px-7">
        {orderStatus !== "idle" && orderStatus !== "pending" ? (
          <div className="flex flex-col justify-center h-full">
            {orderStatus === "success" ? (
              <div className="w-full text-center">
                <h1 className="w-full mb-8 text-4xl font-semibold">
                  Заказ успешно оформлен.
                </h1>
                <p className="w-full text-xl">
                  Мы вам перезвоним в ближайшее время.
                </p>
              </div>
            ) : (
              <div className="w-full text-center">
                <h1 className="w-full text-4xl font-semibold text-red-400">
                  Ошибка оформления заказа.
                </h1>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="border-b border-white">
              <h1 className="mb-5 text-sm leading-none tracking-widest text-center uppercase">
                Ваша корзина
              </h1>
            </div>
            {Object.keys(cartItems).length > 0 ? (
              <>
                <div className="mb-auto overflow-y-auto min-h-28">
                  {Object.keys(cartItems).map((productId) => (
                    <CartItem key={productId} id={productId} />
                  ))}
                </div>
                <OrderForm />
              </>
            ) : (
              <>
                <div className="w-full text-center">
                  <h2 className="w-full text-4xl font-semibold">
                    В корзине пусто
                  </h2>
                </div>
                <div>
                  <IsomorphicAnchorLink to="/#catalog" stripHash>
                    <button
                      aria-label="Перейти в каталог товаров"
                      className="block w-full py-4 font-semibold tracking-wider text-center text-gray-900 uppercase bg-white border-2 border-black"
                      onClick={() => setIsCartOpen(false)}
                      type="button"
                    >
                      Наш каталог товаров
                    </button>
                  </IsomorphicAnchorLink>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

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
