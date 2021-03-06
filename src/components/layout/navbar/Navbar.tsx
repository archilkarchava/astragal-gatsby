import React from "react"
import Logo from "./Logo"
import NavMenu from "./nav-menu"

interface Props {
  siteTitle?: string
}

const Navbar: React.FC<Props> = ({ siteTitle = "" }) => {
  return (
    <header className="fixed top-0 z-30 w-full bg-white border-2 border-black rounded-none">
      <div className="flex flex-row justify-between mx-4 md:mx-10">
        <Logo siteTitle={siteTitle} />
        <NavMenu />
      </div>
    </header>
  )
}

export default Navbar
