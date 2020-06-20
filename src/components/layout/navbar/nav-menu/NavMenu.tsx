import React from "react"
import { useShowMap } from "../../../../hooks/contextHooks"
import CartButton from "./cart-button"
import NavItem from "./NavItem"
import NavLink from "./NavLink"

const NavMenu: React.FC = () => {
  const setIsShowMap = useShowMap()[1]
  return (
    <nav className="flex justify-between w-7/12 sm:w-56">
      <ul className="flex justify-between w-full">
        {/* <NavLink to="/">Главная</NavLink> */}
        <NavItem>
          <NavLink to="/#catalog">Каталог</NavLink>
        </NavItem>
        {/* <NavLink to="/">О нас</NavLink> */}
        <NavItem
          onMouseOver={() => setIsShowMap(true)}
          onFocus={() => setIsShowMap(true)}
          onClick={() => setIsShowMap(true)}
        >
          <NavLink to="/#contact">Контакты</NavLink>
        </NavItem>
        <NavItem>
          <CartButton />
        </NavItem>
      </ul>
    </nav>
  )
}

export default NavMenu
