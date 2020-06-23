import React from "react"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { Store } from "../../../contexts/siteContext"
import {
  useCartItems,
  useCartToggle,
  useCartTotalPrice,
  useOrderStatus,
  useUpdateItemsFromCart,
} from "../../../hooks/contextHooks"
import formatPrice from "../../../utils/formatPrice"
import phoneNumberRegex from "../../../utils/phoneNumberRegex"

const OrderForm: React.FC = () => {
  const [isCartOpen] = useCartToggle()
  const totalPrice = useCartTotalPrice()
  const [name, setName] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
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

  const onSubmit = async (data: { name: string; phoneNumber: string }) => {
    setOrderStatus("pending")
    const order: Pick<Store, "cartItems"> & {
      customer: { name: string; phoneNumber: string }
    } = {
      customer: data,
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
        setName("")
        setPhoneNumber("")
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
            aria-label="Ваше имя"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            aria-label="Номер телефона"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="phoneNumber"
            inputRef={register({
              required: { message: "Введите номер телефона.", value: true },
              pattern: {
                value: phoneNumberRegex,
                message: "Введите корректный номер телефона.",
              },
            })}
            mask="+7 (999) 999-99-99"
            maskChar={null}
          />

          <div className="h-6 text-sm text-red-500">
            {errors.phoneNumber && errors.phoneNumber.message}
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

export default OrderForm
