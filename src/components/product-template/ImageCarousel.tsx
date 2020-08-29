import clsx from "clsx"
import Image from "gatsby-image/withIEPolyfill"
import React from "react"
import { Swipeable } from "react-swipeable"

const ImageCarousel: React.FC<
  Pick<GatsbyTypes.PostQuery["sanityProduct"], "images"> &
    JSX.IntrinsicElements["div"]
> = ({ images, ...rest }) => {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0)
  return (
    <div {...rest}>
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
                  className={clsx(
                    activeImageIdx === i ? "opacity-1 z-10" : "opacity-0",
                    "absolute top-0 left-0 w-full h-full duration-500 ease-in-out"
                  )}
                >
                  <Image
                    fluid={fluid}
                    style={{ position: "static", height: "100%" }}
                    objectFit="contain"
                    objectPosition="50% 0%"
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
                  className={clsx(
                    activeImageIdx === i && "border-black",
                    "w-full h-full rounded-full border-2 border-transparent"
                  )}
                  imgStyle={{ borderRadius: "9999px" }}
                />
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
