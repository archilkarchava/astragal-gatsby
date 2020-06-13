import classNames from "classnames"
import React from "react"
import {
  useCartToggle,
  useCartTotalQuantity,
  usePreloadMap,
} from "../hooks/contextHooks"
import BagIcon from "./icons/BagIcon"
import IsomorphicAnchorLink from "./IsomorphicAnchorLink"

const Nav: React.FC = () => {
  const triggerMapPreload = usePreloadMap()
  return (
    <>
      <nav className="flex items-center w-auto md:flex-wrap">
        <ul className="flex justify-between block h-full">
          {/* <NavLink to="/">Главная</NavLink> */}
          <NavLink to="/#catalog">Каталог</NavLink>
          {/* <NavLink to="/">О нас</NavLink> */}
          <NavLink
            to="/#contact"
            onMouseOver={() => triggerMapPreload()}
            onFocus={() => triggerMapPreload()}
          >
            Контакты
          </NavLink>
        </ul>
        <CartButton />
      </nav>
    </>
  )
}

const NavLink: React.FC<JSX.IntrinsicElements["li"] & { to: string }> = ({
  className,
  children,
  to,
  ...rest
}) => {
  return (
    <li
      className={classNames(
        { [className]: className },
        "block h-full leading-none mr-6 text-sm text-gray-900 md:mr-10"
      )}
      {...rest}
    >
      <IsomorphicAnchorLink
        className="flex items-center justify-center block h-full"
        stripHash
        to={to}
      >
        {children}
      </IsomorphicAnchorLink>
    </li>
  )
}

const CartButton: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useCartToggle()
  const itemCount = useCartTotalQuantity()
  return (
    <button
      type="button"
      aria-label="Открыть корзину"
      className="h-full leading-none text-gray-900"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <BagIcon className="w-7 h-7" />
      <div className="absolute text-xs leading-8 text-white -translate-y-full w-7 h-7">
        {itemCount}
      </div>
    </button>
  )
}

export default Nav
