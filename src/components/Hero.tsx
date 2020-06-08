import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import IsomorphicAnchorLink from "./IsomorphicAnchorLink"

const Hero = () => {
  const { ourServicesBgImg } = useStaticQuery<GatsbyTypes.HeroQuery>(graphql`
    query Hero {
      ourServicesBgImg: file(relativePath: { eq: "our-services-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage
        fluid={[
          `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8))`,
          ourServicesBgImg.childImageSharp.fluid,
        ]}
        className="w-full min-h-screen"
      >
        {/* <div className="relative text-white -translate-y-1/2 top-1/2">
        <h1 className="text-3xl font-semibold leading-none text-center mb-15 md:text-4xl">
          Делаем на заказ
        </h1>
        <ul className="text-center list-none">
          <li className="mb-3 text-xl">Столы</li>
          <li className="mb-3 text-xl">Стулья</li>
          <li className="text-xl">Лестницы</li>
        </ul>
      </div> */}
        <div className="container absolute bottom-0 flex text-gray-100 -translate-x-1/2 mb-28 left-1/2">
          <IsomorphicAnchorLink
            to="/#catalog"
            className="px-20 py-4 m-auto font-semibold text-center text-gray-100 uppercase bg-black border-2 border-black rounded-none"
          >
            Наши изделия
          </IsomorphicAnchorLink>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Hero
