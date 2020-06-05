import classNames from "classnames"
import { GatsbyLinkProps, Link } from "gatsby"
import React from "react"
import { useCartToggle, useCartTotalQuantity } from "../hooks/contextHooks"
import BagIcon from "./icons/BagIcon"

const Nav: React.FC = () => {
  return (
    <>
      <nav className="flex items-center w-auto md:flex-wrap">
        <ul className="flex justify-between block">
          {/* <NavLink to="/">Главная</NavLink> */}
          <NavLink to="/#catalog">Каталог</NavLink>
          {/* <NavLink to="/">О нас</NavLink> */}
          <NavLink to="/#contact">Контакты</NavLink>
        </ul>
        <CartButton />
      </nav>
    </>
  )
}

const NavLink: React.FC<Omit<GatsbyLinkProps<{}>, "ref">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <li
      className={classNames(
        { [className]: className },
        "block py-3 mr-6 md:mr-10 leading-none"
      )}
    >
      <Link className="text-center text-gray-900" {...rest}>
        {children}
      </Link>
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
      className="leading-none text-gray-900"
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
