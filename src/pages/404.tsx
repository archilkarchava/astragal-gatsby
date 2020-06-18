import { Link } from "gatsby"
import React from "react"
import SEO from "../components/SEO"

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Страница не найдена" />
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <div>
        <h1 className="mb-5 text-4xl font-bold">
          Такой страницы не существует.
        </h1>
        <Link to="/" className="text-xl text-blue-600 underline">
          Вернуться на главную
        </Link>
      </div>
    </div>
  </>
)

export default NotFoundPage
