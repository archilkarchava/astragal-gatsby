import React from "react"

interface Props {
  siteTitle?: string
}

const Footer: React.FC<Props> = ({ siteTitle }) => {
  return (
    <footer className="bottom-0 py-10 text-sm text-center text-gray-100 bg-black">
      © {siteTitle} {new Date().getFullYear()}. Все права защищены.
    </footer>
  )
}

export default Footer
