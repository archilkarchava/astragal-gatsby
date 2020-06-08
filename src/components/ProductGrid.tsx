import classNames from "classnames"
import { Link } from "gatsby"
import type { FluidObject } from "gatsby-image"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import useProducts from "../hooks/useProducts"
import formatPrice from "../utils/formatPrice"
import AddToCartButton from "./AddToCartButton"

const ProductGrid: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const products = useProducts()
  return (
    <div className="px-10 py-10 md:py-20 lg:py-24">
      <h1 className="mb-10 text-3xl font-semibold leading-none text-center lg:text-4xl">
        Наши изделия
      </h1>
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
              imageFluid2={
                product.images[1]
                  ? product.images[1].asset.localFile.childImageSharp.fluid
                  : undefined
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
  imageFluid2?: FluidObject
  slugStr: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  title,
  price,
  oldPrice,
  imageFluid,
  imageFluid2,
  slugStr,
}) => {
  return (
    <div className="flex flex-col w-full p-3 overflow-hidden h-90 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="h-full">
        <Link
          className="h-full text-gray-900 no-underline"
          to={`/products/${slugStr}`}
        >
          <div className="relative block">
            <Image
              className="mb-1 bg-white h-60"
              fluid={imageFluid}
              alt={title}
              objectFit="contain"
              objectPosition="50% 50%"
            />
            {imageFluid2 && (
              <Image
                className="top-0 left-0 block w-full duration-500 ease-in-out bg-white opacity-0 h-60 hover:opacity-100"
                fluid={imageFluid2}
                alt={title}
                style={{
                  position: "absolute",
                }}
                imgStyle={{
                  width: "100%",
                }}
                objectFit="contain"
                objectPosition="50% 50%"
              />
            )}
          </div>
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
            <span className="text-2xl font-semibold leading-none">
              {formatPrice(price)}
            </span>
            <AddToCartButton size="small" _id={_id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
