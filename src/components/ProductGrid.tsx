import classNames from "classnames"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import type { IFluidObject as FluidObject } from "gatsby-background-image"
import React from "react"
import { useAddItemToCart, useCartItemQuantity } from "../hooks/contextHooks"
import useProducts from "../hooks/useProducts"
import formatPrice from "../utils/formatPrice"

const ProductGrid: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const products = useProducts()
  return (
    <div
      className={classNames(
        "flex flex-wrap max-w-screen-lg mx-auto my-28",
        className
      )}
      {...rest}
    >
      {Object.entries(products).flatMap(([productId, product]) => {
        if (
          !product ||
          !product.slug ||
          !product.images.length ||
          !product.images[0].asset
        )
          return []
        return [
          <ProductCard
            key={productId}
            id={productId}
            title={product.title}
            oldPrice={product.oldPrice ?? undefined}
            price={product.price}
            slugStr={product.slug.current}
            imageFluid={product.images[0].asset.localFile.childImageSharp.fluid}
          />,
        ]
      })}
    </div>
  )
}

interface ProductCardProps {
  id: string
  title: string
  price: number
  oldPrice?: number
  imageFluid: FluidObject
  slugStr: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  oldPrice,
  imageFluid,
  slugStr,
}) => {
  const [quantity] = useCartItemQuantity(id)
  const addCartItem = useAddItemToCart()
  return (
    <div className="flex flex-col w-full p-3 overflow-hidden h-88 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="h-full">
        <Link
          className="text-gray-900 no-underline"
          to={`/products/${slugStr}`}
        >
          <BackgroundImage
            className="mb-1 h-60"
            style={{
              backgroundSize: "contain",
            }}
            fluid={imageFluid}
            alt={title}
          />
        </Link>

        <div className="text-lg leading-none text-center">{title}</div>
      </div>
      {price && (
        <div className="content-end">
          {oldPrice && (
            <div className="mb-1 text-lg leading-none text-gray-600 line-through">
              {oldPrice && formatPrice(oldPrice)}
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold leading-none">
              {formatPrice(price)}
            </span>
            <button
              onClick={() => addCartItem(id, quantity + 1)}
              type="button"
              className="px-4 py-1 font-semibold leading-none uppercase transition duration-300 ease-in-out bg-blue-200 border-2 border-black rounded-none focus:bg-blue-400 hover:bg-blue-400"
            >
              в корзину
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
