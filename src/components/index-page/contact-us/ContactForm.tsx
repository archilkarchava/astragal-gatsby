import clsx from "clsx"
import React from "react"
import { useForm } from "react-hook-form"
import emailRegex from "../../../utils/emailRegex"
import Alert from "../../common/Alert"

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState<
    "idle" | "pending" | "failure" | "success"
  >("idle")

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  })

  const onSubmit = async (data: {
    name: string
    phoneNumber: string
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
        setName("")
        setEmail("")
        setMessage("")
      })
      .catch(() => setFormStatus("failure"))
  }

  return (
    <div className="h-full px-10 pt-24 md:px-20">
      <h2 className="mb-5 text-3xl font-semibold leading-none lg:text-4xl">
        Обратная связь
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="text-gray-900">
        <div>
          <p className="mb-1 text-sm text-gray-900">Ваше имя</p>
          <input
            ref={register({
              required: { message: "Введите ваше имя.", value: true },
            })}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            type="text"
            className={clsx(
              errors.email ? "border-red-500" : "border-gray-900",
              `w-full p-2 text-gray-900 bg-white border border-gray-900 rounded-none`
            )}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={register({
              required: {
                message: "Введите адрес электронной почты.",
                value: true,
              },
              pattern: {
                value: emailRegex,
                message: "Введите адрес электронной почты.",
              },
            })}
          />
          <div className="h-6 text-sm text-red-500">
            {errors.email && errors.email.message}
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-900">Сообщение</p>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={register({
              required: { message: "Введите сообщение.", value: true },
            })}
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
          aria-label="Отправить сообщение"
          className="block w-full py-3 mx-auto font-semibold tracking-wider text-gray-100 uppercase duration-300 ease-out bg-black border-2 border-black px-15 hover:bg-white hover:text-black focus:bg-white focus:text-black"
        >
          {formStatus === "pending" ? "Подождите..." : "Отправить"}
        </button>
        <div className="relative w-full my-5 h-18.5">
          <div className="absolute top-0 left-0 w-full">
            <Alert
              show={formStatus === "success"}
              onClose={() => setFormStatus("idle")}
              title="Сообщение успешно отправлено"
              message="Мы с вами свяжемся."
              type="success"
            />
          </div>
          <div className="absolute top-0 left-0 w-full">
            <Alert
              show={formStatus === "failure"}
              onClose={() => setFormStatus("idle")}
              title="Ошибка отправки"
              message="Попробуйте ещё раз."
              type="error"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
