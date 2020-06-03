import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import CartWidget from "./CartWidget"
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
      <CartWidget />
      {/* <div className="max-w-3xl px-4 pt-0 pb-6 mx-auto my-0">
      </div> */}
      <Footer siteTitle={title} />
    </>
  )
}

export default Layout
