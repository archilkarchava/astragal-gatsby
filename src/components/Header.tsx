import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  return (
    <header className="mb-6 bg-purple-700">
      <div className="max-w-3xl p-10 px-4 py-6 mx-auto my-0">
        <h1 className="m-0">
          <Link to="/" className="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
