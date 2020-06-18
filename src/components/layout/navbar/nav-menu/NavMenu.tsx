import React from "react"
import { useShowMap } from "../../../../hooks/contextHooks"
import CartButton from "./cart-button"
import NavLink from "./NavLink"

const NavMenu: React.FC = () => {
  const setIsShowMap = useShowMap()[1]
  return (
    <nav className="flex items-center w-auto md:flex-wrap">
      <ul className="flex justify-between block h-full">
        {/* <NavLink to="/">Главная</NavLink> */}
        <NavLink to="/#catalog">Каталог</NavLink>
        {/* <NavLink to="/">О нас</NavLink> */}
        <NavLink
          to="/#contact"
          onMouseOver={() => setIsShowMap(true)}
          onFocus={() => setIsShowMap(true)}
          onClick={() => setIsShowMap(true)}
        >
          Контакты
        </NavLink>
      </ul>
      <CartButton />
    </nav>
  )
}

export default NavMenu
