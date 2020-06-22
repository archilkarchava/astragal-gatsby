import clsx from "clsx"
import React from "react"

interface Props {
  title?: string
  message?: string
  type?: "error" | "success" | "neutral"
}

const Alert: React.FC<Props> = ({ title, message, type = "neutral" }) => {
  const [show, setShow] = React.useState(true)
  if (!show) return null
  return (
    <div
      className={clsx(
        show ? "visible" : "invisible",
        type === "neutral" && "text-gray-700 bg-gray-100 border-gray-400",
        type === "success" && "text-green-700 bg-green-100 border-green-400",
        type === "error" && "text-red-700 bg-red-100 border-red-400",
        "relative px-4 py-3 border rounded-none ease-in-out duration-500"
      )}
      role="alert"
    >
      <h3 className="font-bold">{title}</h3>{" "}
      <span className="block sm:inline">{message}</span>
      <button
        type="button"
        onClick={() => setShow(false)}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg
          className={clsx(
            type === "neutral" && "text-gray-500",
            type === "success" && "text-green-500",
            type === "error" && "text-red-500",
            "w-6 h-6 fill-current"
          )}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Закрыть</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </button>
    </div>
  )
}

export default Alert
