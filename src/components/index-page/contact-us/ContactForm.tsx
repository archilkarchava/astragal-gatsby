import clsx from "clsx"
import React from "react"
import { useForm } from "react-hook-form"
import emailRegex from "../../../utils/emailRegex"
import Alert from "../../common/Alert"

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("idle")

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async (data: {
    name: string
    phone: string
    message: string
  }) => {
    setFormStatus("pending")

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw res
        }
        return res.json()
      })
      .then(() => {
        setFormStatus("success")
      })
      .catch(() => setFormStatus("failure"))
  }

  return (
    <div className="p-8 md:p-12">
      <h2 className="mb-5 text-3xl font-semibold leading-none text-center lg:text-4xl">
        Обратная связь
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-black border-t border-white"
      >
        <div>
          <p className="mb-1 text-sm text-gray-900">Ваше имя</p>
          <input
            ref={register({
              required: { message: "Введите ваше имя.", value: true },
            })}
            name="name"
            className={clsx(
              errors.name ? "border-red-500" : "border-gray-900",
              `w-full p-2 text-gray-900 bg-white border border-gray-900 rounded-none`
            )}
            type="text"
          />
          <div className="h-6 text-sm text-red-500">
            {errors.name && errors.name.message}
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-900">Email</p>
          <input
            ref={register({
              required: {
                message: "Введите адрес электронной почты.",
                value: true,
              },
              pattern: {
                message: "Введите корректный адрес электронной почты.",
                value: emailRegex,
              },
            })}
            name="email"
            className={clsx(
              errors.email ? "border-red-500" : "border-gray-900",
              `w-full p-2 text-gray-900 bg-white border border-gray-900 rounded-none`
            )}
            type="text"
          />
          <div className="h-6 text-sm text-red-500">
            {errors.email && errors.email.message}
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-900">Сообщение</p>
          <textarea
            ref={register({
              required: { message: "Введите сообщение.", value: true },
            })}
            name="message"
            className={clsx(
              errors.message ? "border-red-500" : "border-gray-900",
              `w-full p-2 text-gray-900 bg-white border border-gray-900 rounded-none`
            )}
          />
          <div className="h-6 text-sm text-red-500">
            {errors.message && errors.message.message}
          </div>
        </div>
        <button
          type="submit"
          aria-label="Отправить"
          className="block w-full py-3 mx-auto mt-6 font-semibold tracking-wider text-gray-100 uppercase duration-300 ease-out bg-black border-2 border-black px-15 hover:bg-white hover:text-black focus:bg-white focus:text-black"
        >
          {formStatus === "pending" ? "Подождите..." : "Отправить"}
        </button>
      </form>
      {formStatus === "failure" && (
        <div className="mt-5">
          <Alert
            title="Ошибка отправки"
            message="Попробуйте ещё раз."
            type="error"
          />
        </div>
      )}
      {formStatus === "success" && (
        <div className="mt-5">
          <Alert
            title="Сообщение успешно отправлено"
            message="Мы с вами свяжемся."
            type="success"
          />
        </div>
      )}
    </div>
  )
}

export default ContactForm
