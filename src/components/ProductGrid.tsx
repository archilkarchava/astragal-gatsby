import classNames from "classnames"
import { Link } from "gatsby"
import type { IFluidObject } from "gatsby-background-image"
import BackgroundImage from "gatsby-background-image-es5"
import React from "react"
import useProducts from "../hooks/useProducts"
import formatPrice from "../utils/formatPrice"
import getDiscountPercentStr from "../utils/getDiscountPercentStr"

const ProductGrid: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  const products = useProducts()
  return (
    <div className="px-10 py-10 md:py-16 lg:py-20">
      <h1
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="mb-10 text-3xl font-semibold leading-none text-center lg:text-4xl"
      >
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
  imageFluid: IFluidObject
  imageFluid2?: IFluidObject
  slugStr: string
}

const DiscountChip: React.FC = ({ children }) => {
  return (
    <div className="absolute left-0 px-1 py-0.5 text-xs font-bold text-red-700 bg-white top-4 pointer-events-none">
      {children}
    </div>
  )
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  oldPrice,
  imageFluid,
  imageFluid2,
  slugStr,
}) => {
  // const firstBgImageCss = css`
  //   background-color: #ffffff !important;
  //   background-size: contain !important;
  //   background-position: center !important;
  // `
  // const secondBgImageCss = css`
  //   background-color: #ffffff !important;
  //   background-size: contain !important;
  //   background-position: center !important;
  //   opacity: 0 !important;
  //   position: absolute !important;
  //   :hover {
  //     opacity: 0.99 !important;
  //   }
  // `

  return (
    <Link
      to={`/products/${slugStr}`}
      className="flex flex-col w-full p-4 overflow-hidden transition duration-500 ease-in-out h-86 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <div className="h-full text-gray-900 no-underline">
        <div className="relative block">
          <BackgroundImage
            className="mb-1 h-60"
            style={{ backgroundSize: "contain", backgroundPosition: "center" }}
            fluid={imageFluid}
            alt={title}
          />
          {imageFluid2 && (
            <BackgroundImage
              className="top-0 left-0 block w-full duration-500 ease-in-out bg-white opacity-0 h-60 hover:opacity-99"
              style={{
                backgroundSize: "contain",
                position: "absolute",
                backgroundPosition: "center",
              }}
              preserveStackingContext
              fluid={imageFluid2}
              alt={title}
            />
          )}
          {oldPrice > price && (
            <DiscountChip>
              {getDiscountPercentStr(oldPrice, price)}
            </DiscountChip>
          )}
        </div>

        <div className="my-2 text-base leading-5">{title}</div>
      </div>
      {price && (
        <div className="content-end">
          <div className="flex flex-row">
            {oldPrice > price && (
              <div className="mr-1 text-lg font-light leading-none text-gray-700 line-through">
                {formatPrice(oldPrice)}
              </div>
            )}
            <div
              className={classNames(
                oldPrice > price ? "text-red-700" : "text-current",
                "text-lg font-bold leading-none"
              )}
            >
              {formatPrice(price)}
            </div>
            {/* <AddToCartButton size="small" _id={_id} /> */}
          </div>
        </div>
      )}
    </Link>
  )
}

export default ProductGrid
