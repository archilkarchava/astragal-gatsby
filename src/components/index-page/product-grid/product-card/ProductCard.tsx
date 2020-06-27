import clsx from "clsx"
import { Link } from "gatsby"
import type { FluidObject } from "gatsby-image"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import formatPrice from "../../../../utils/formatPrice"
import getDiscountPercentStr from "../../../../utils/getDiscountPercentStr"
import DiscountChip from "./DiscountChip"

interface Props {
  _id: string
  title: string
  price: number
  oldPrice?: number
  imageFluid: FluidObject
  imageFluid2?: FluidObject
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
          <Image
            className="mb-1 h-60"
            // style={{ backgroundSize: "contain", backgroundPosition: "center" }}
            objectFit="contain"
            objectPosition="50% 50%"
            fluid={imageFluid}
            alt={title}
          />
          {imageFluid2 && (
            <Image
              className="top-0 left-0 block w-full duration-500 ease-in-out bg-white opacity-0 h-60 hover:opacity-99"
              style={{
                // backgroundSize: "contain",
                position: "absolute",
                // backgroundPosition: "center",
              }}
              objectFit="contain"
              objectPosition="50% 50%"
              // preserveStackingContext
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
              className={clsx(
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
