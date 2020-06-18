import classNames from "classnames"
import { graphql } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import { Swipeable } from "react-swipeable"
import AddToCartButton from "../components/AddToCartButton"
import Layout from "../components/Layout"
import ProductBody from "../components/ProductBody"
import SEO from "../components/SEO"
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

const ImageCarousel: React.FC<Pick<
  GatsbyTypes.PostQuery["sanityProduct"],
  "images"
>> = ({ images }) => {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0)
  return (
    <div className="flex flex-col justify-center w-full overflow-hidden h-96 md:h-136 lg:w-1/2 lg:h-full">
      {images.length > 0 && (
        <div className="relative h-96 md:h-136 lg:h-full">
          {images.map(
            (
              {
                _key,
                asset: {
                  localFile: {
                    childImageSharp: { fluid },
                  },
                },
              },
              i
            ) => (
              <Swipeable
                key={_key}
                preventDefaultTouchmoveEvent
                onSwipedLeft={() =>
                  activeImageIdx < images.length - 1 &&
                  setActiveImageIdx(activeImageIdx + 1)
                }
                onSwipedRight={() =>
                  activeImageIdx > 0 && setActiveImageIdx(activeImageIdx - 1)
                }
              >
                <div
                  className={classNames(
                    activeImageIdx === i ? "opacity-1 z-10" : "opacity-0",
                    "absolute top-0 left-0 w-full h-full duration-500 ease-in-out"
                  )}
                >
                  <Image
                    fluid={fluid}
                    style={{ position: "static" }}
                    objectFit="contain"
                    // alt={title}
                  />
                </div>
              </Swipeable>
            )
          )}
        </div>
      )}
      {images.length > 1 && (
        <div className="z-20 flex flex-row content-center justify-center h-10 my-5">
          {images.map(
            (
              {
                _key,
                asset: {
                  localFile: {
                    childImageSharp: { fluid },
                  },
                },
              },
              i
            ) => (
              <button
                type="button"
                aria-label={`Выбрать изображение ${i}`}
                key={_key}
                onMouseEnter={() => setActiveImageIdx(i)}
                // onKeyDown={() => setActiveImageIdx(i)}
                onClick={() => setActiveImageIdx(i)}
                className="w-10 h-10 mx-2 rounded-full cursor-pointer focus:outline-none focus:shadow-outline-gray"
              >
                <Image
                  fluid={fluid}
                  className={classNames(
                    activeImageIdx === i && "border-black",
                    "w-full h-full rounded-full border-2 border-transparent"
                  )}
                  imgStyle={{ borderRadius: "9999px" }}
                  // alt={}
                />
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}

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
      <div className="box-border flex flex-col justify-between w-full h-full pt-12 lg:h-screen lg:flex-row md:pt-16">
        <ImageCarousel images={images} />
        <div className="flex flex-col justify-center w-full p-3 mb-10 lg:m-0 lg:p-0 lg:pl-12 h-1/2 lg:w-1/2 lg:h-full">
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
                  className={classNames(
                    oldPrice > price ? "text-red-700" : "text-current",
                    "mr-1 text-3xl font-bold lg:text-4xl"
                  )}
                >
                  {formatPrice(price)}
                </span>
                {oldPrice > price && (
                  <span className="text-base font-normal text-red-700 lg:text-lg">
                    ({getDiscountPercentStr(oldPrice, price)})
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="mt-5">
            <AddToCartButton _id={_id} inverse size="big" />
            {/* <button
              onClick={() => addCartItem(_id, quantity + 1)}
              type="button"
              className="w-full px-16 py-3 text-gray-100 uppercase duration-300 ease-in-out bg-black border-2 border-white rounded-none lg:w-auto hover:bg-white hover:border-black focus:border-black hover:text-gray-900 focus:text-gray-900 focus:bg-white"
            >
              Купить
            </button> */}
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
          {_rawBody && (
            <div>
              <ProductBody blocks={_rawBody} />
            </div>
          )}
        </div>
        {/* <Link to="/">Вернуться на главную</Link> */}
      </div>
    </Layout>
  )
}

export default ProductTemplate
