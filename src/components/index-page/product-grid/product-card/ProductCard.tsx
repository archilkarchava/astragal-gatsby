import classNames from "classnames"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"
import type { IFluidObject } from "gatsby-background-image-es5"
import React from "react"
import formatPrice from "../../../../utils/formatPrice"
import getDiscountPercentStr from "../../../../utils/getDiscountPercentStr"
import DiscountChip from "./DiscountChip"

interface Props {
  _id: string
  title: string
  price: number
  oldPrice?: number
  imageFluid: IFluidObject
  imageFluid2?: IFluidObject
  slugStr: string
}

const ProductCard: React.FC<Props> = ({
  title,
  price,
  oldPrice,
  imageFluid,
  imageFluid2,
  slugStr,
}) => {
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
          </div>
        </div>
      )}
    </Link>
  )
}

export default ProductCard
