import clsx from "clsx"
import React from "react"
import useProducts from "../../../hooks/useProducts"
import ProductCard from "./product-card"

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
        className={clsx("flex flex-wrap max-w-screen-lg mx-auto", className)}
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

export default ProductGrid
