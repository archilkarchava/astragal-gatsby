import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white border-2 border-black rounded-none">
        <div className="flex flex-row justify-between mx-4 md:mx-10">
          <Logo siteTitle={siteTitle} />
          <Nav />
        </div>
        {/* <div className="max-w-3xl p-10 px-4 py-6 mx-auto my-0">
      </div> */}
      </header>
    </>
  )
}

export default Header
