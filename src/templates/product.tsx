import clsx from "clsx"
import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/common/SEO"
import Layout from "../components/layout/Layout"
import AddToCartButton from "../components/product-template/AddToCartButton"
import ImageCarousel from "../components/product-template/ImageCarousel"
import ProductBody from "../components/product-template/ProductBody"
import formatPrice from "../utils/formatPrice"
import getDiscountPercentStr from "../utils/getDiscountPercentStr"

export const pageQuery = graphql`
  query Post($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      _id
      title
      price
      oldPrice
      sizes {
        depth
        height
        length
      }
      materials {
        title
      }
      images {
        _key
        asset {
          localFile {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

interface Props {
  data: { sanityProduct: GatsbyTypes.SanityProduct }
}

const ProductTemplate: React.FC<Props> = ({
  data: {
    sanityProduct: {
      _id,
      title,
      price,
      oldPrice,
      sizes,
      materials,
      images,
      _rawBody,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <div className="box-border flex flex-col justify-between w-full h-full lg:h-full lg:flex-row">
        <ImageCarousel
          images={images}
          className="flex flex-col justify-center w-full overflow-hidden pt-13 lg:h-screen lg:w-1/2 md:pt-16 lg:pt-32 h-96 md:h-136"
        />
        <div className="w-full px-3 mb-10 lg:pl-24 lg:w-1/2 lg:pt-32">
          <h1 className="font-serif text-4xl lg:text-5xl">{title}</h1>
          <div className="w-10 my-6 ml-2 border-t border-black" />
          <div className="flex flex-col">
            {price > 0 && (
              <div>
                {oldPrice > price && (
                  <span className="mr-2 text-base font-normal text-gray-700 line-through lg:text-lg">
                    {formatPrice(oldPrice)}
                  </span>
                )}
                <span
                  className={clsx(
                    oldPrice > price ? "text-red-700" : "text-current",
                    "mr-1 text-3xl font-bold lg:text-4xl"
                  )}
                >
                  {formatPrice(price)}
                </span>
                {oldPrice > price && (
                  <span className="text-base font-normal text-red-700 lg:text-lg">
                    {getDiscountPercentStr(oldPrice, price)}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="mt-5">
            <AddToCartButton _id={_id} inverse size="big" />
          </div>
          <ul className="list-inside my-7 lg:my-10">
            {materials.length > 0 && (
              <li className="text-base list-disc">
                {materials.length === 1 && (
                  <>
                    <span>Материал: </span>
                    <span>{materials[0].title}</span>
                  </>
                )}
                {materials.length > 1 && (
                  <>
                    <span>Материалы: </span>
                    <span>
                      {materials.map((material) => material.title).join(", ")}
                    </span>
                  </>
                )}
              </li>
            )}
            {sizes && sizes.length && sizes.depth && (
              <li className="text-base list-disc">
                <span>Размер: </span>
                <span>
                  {sizes.length}
                  {sizes.length && sizes.depth && "x"}
                  {sizes.depth}
                  {sizes.depth && sizes.height && "x"}
                  {sizes.height}
                </span>
              </li>
            )}
          </ul>
          {_rawBody && <ProductBody blocks={_rawBody} />}
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
