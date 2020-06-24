import React from "react"
import { Controller, useForm } from "react-hook-form"
import type { OnSubmit } from "react-hook-form"
import ReactInputMask from "react-input-mask"
import {
  useCartToggle,
  useCartTotalPrice,
} from "../../../../hooks/contextHooks"
import formatPrice from "../../../../utils/formatPrice"
import phoneNumberRegex from "../../../../utils/phoneNumberRegex"

interface Props {
  onSubmit: OnSubmit<Record<string, string>>
  isSubmitting: boolean
}

const OrderForm: React.FC<Props> = ({ onSubmit, isSubmitting }) => {
  const [isCartOpen] = useCartToggle()
  const totalPrice = useCartTotalPrice()
  const nameInputRef = React.useRef<HTMLInputElement>()
  const phoneInputRef = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    if (isCartOpen) {
      nameInputRef.current.focus()
    }
  }, [isCartOpen])

  const { register, control, handleSubmit, errors } = useForm()

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
            defaultValue=""
          />
          <div className="h-6 text-sm text-red-500">
            {errors.name && errors.name.message}
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm">Номер телефона</p>
          <Controller
            onFocus={() => phoneInputRef.current.focus()}
            aria-label="Номер телефона"
            name="phoneNumber"
            defaultValue=""
            maskChar={null}
            rules={{
              validate: {
                validPhoneNumber: (phone: string) => {
                  return !phoneNumberRegex.test(phone)
                    ? "Введите номер телефона."
                    : undefined
                },
              },
            }}
            as={
              <ReactInputMask mask="+7 (999) 999-99-99">
                {() => {
                  return (
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      className="w-full p-2 text-gray-900 bg-gray-100 rounded-none"
                    />
                  )
                }}
              </ReactInputMask>
            }
            control={control}
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
            {isSubmitting ? "Подождите..." : "Оформить заказ"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm
