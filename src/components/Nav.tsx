import classNames from "classnames"
import { GatsbyLinkProps, Link } from "gatsby"
import React from "react"
import { useCartToggle, useCartTotalQuantity } from "../hooks/contextHooks"

const BagIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width={23}
      height={16}
      viewBox="0 0 27.03 38.05"
      fill="currentColor"
      {...props}
    >
      <desc>Иконка Корзины</desc>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M20.84,10V7.32a7.33,7.33,0,0,0-14.65,0V10H0V30.12c0,4.37,3.27,7.93,7.28,7.93H19.75c4,0,7.28-3.56,7.28-7.93V10ZM8.19,7.32a5.33,5.33,0,0,1,10.65,0V10H8.19Z" />
        </g>
      </g>
    </svg>
  )
}

const Nav: React.FC = () => {
  return (
    <>
      <nav className="flex items-center w-auto md:flex-wrap">
        <ul className="flex justify-between hidden md:block">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="/">О нас</NavLink>
          <NavLink to="/">Контакты</NavLink>
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
        "block py-3 md:inline-block md:mx-4 lg:mx-5 leading-none"
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
      className="py-1 leading-none text-gray-900 md:ml-4 lg:ml-5"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <BagIcon className="w-7 h-7" />
      <div className="absolute text-xs leading-7 text-white w-7 h-7 top-3/12 md:top-1/3">
        {itemCount}
      </div>
    </button>
  )
}

export default Nav
