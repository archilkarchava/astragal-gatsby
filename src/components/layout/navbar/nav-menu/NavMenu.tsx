import React from "react"
import { useShowMap } from "../../../../hooks/contextHooks"
import IsomorphicAnchorLink from "../../../common/IsomorphicAnchorLink"
import CartButton from "./cart-button"
import NavItem from "./NavItem"

const NavMenu: React.FC = () => {
  const setIsShowMap = useShowMap()[1]
  return (
    <nav className="flex justify-between w-7/12 sm:w-56">
      <ul className="flex justify-between w-full">
        {/* <NavLink to="/">Главная</NavLink> */}
        <NavItem>
          <IsomorphicAnchorLink stripHash to="/#catalog">
            Каталог
          </IsomorphicAnchorLink>
        </NavItem>
        {/* <NavLink to="/">О нас</NavLink> */}
        <NavItem
          onMouseOver={() => setIsShowMap(true)}
          onFocus={() => setIsShowMap(true)}
          onClick={() => setIsShowMap(true)}
        >
          <IsomorphicAnchorLink stripHash to="/#contact">
            Контакты
          </IsomorphicAnchorLink>
        </NavItem>
        <NavItem>
          <CartButton />
        </NavItem>
      </ul>
    </nav>
  )
}

export default NavMenu
