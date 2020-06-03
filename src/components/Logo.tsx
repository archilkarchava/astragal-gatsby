import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle?: string
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <h1 className="flex py-3 text-2xl md:p-0 md:text-4xl">
      <Link
        to="/"
        className="font-serif leading-tight text-gray-900 no-underline"
      >
        {siteTitle}
      </Link>
    </h1>
  )
}

export default Logo
