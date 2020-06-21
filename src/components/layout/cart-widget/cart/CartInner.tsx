import clsx from "clsx"
import React from "react"
import {
  useCartItems,
  useCartToggle,
  useOrderStatus,
} from "../../../../hooks/contextHooks"
import IsomorphicAnchorLink from "../../../common/IsomorphicAnchorLink"
import OrderForm from "../OrderForm"
import CartItem from "./cart-item"
import GoBackIcon from "./GoBackIcon"

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
      className={clsx(
        { [className]: className },
        isCartOpen ? "right-0" : "-right-full",
        "fixed top-0 z-50 w-full min-h-0 h-full max-w-md text-gray-100 duration-500 bg-black border border-black"
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

export default Cart
