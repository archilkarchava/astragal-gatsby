import classNames from "classnames"
import { Link } from "gatsby"
import type { FluidObject } from "gatsby-image"
import Image from "gatsby-image/withIEPolyfill"
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
    <div className="px-10 py-20 lg:py-28">
      <div
        className={classNames(
          "flex flex-wrap max-w-screen-lg mx-auto",
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
              _id={productId}
              title={product.title}
              oldPrice={product.oldPrice ?? undefined}
              price={product.price}
              slugStr={product.slug.current}
              imageFluid={
                product.images[0].asset.localFile.childImageSharp.fluid
              }
            />,
          ]
        })}
      </div>
    </div>
  )
}

interface ProductCardProps {
  _id: string
  title: string
  price: number
  oldPrice?: number
  imageFluid: FluidObject
  slugStr: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  title,
  price,
  oldPrice,
  imageFluid,
  slugStr,
}) => {
  const [quantity] = useCartItemQuantity(_id)
  const addCartItem = useAddItemToCart()
  return (
    <div className="flex flex-col w-full p-3 overflow-hidden h-88 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="h-full">
        <Link
          className="text-gray-900 no-underline"
          to={`/products/${slugStr}`}
        >
          <Image
            className="mb-1 h-60"
            fluid={imageFluid}
            alt={title}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </Link>

        <div className="mb-2 text-lg leading-none text-center">{title}</div>
      </div>
      {price && (
        <div className="content-end">
          {oldPrice && (
            <div className="text-lg leading-none text-gray-600 line-through">
              {oldPrice && formatPrice(oldPrice)}
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold leading-none">
              {formatPrice(price)}
            </span>
            <button
              onClick={() => addCartItem(_id, quantity + 1)}
              type="button"
              className="px-4 py-1 font-semibold leading-none text-gray-900 uppercase transition duration-300 ease-in-out bg-white border-2 border-black rounded-none hover:text-gray-100 focus:text-gray-100 focus:bg-black hover:bg-black"
            >
              Купить
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
