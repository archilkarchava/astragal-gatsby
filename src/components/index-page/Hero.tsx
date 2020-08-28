import clsx from "clsx"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"
import { css } from "linaria"
import React from "react"
import IsomorphicAnchorLink from "../common/IsomorphicAnchorLink"

const gradient = css`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8));
`

const Hero: React.FC = () => {
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
    <section>
      <div
        className={clsx(
          gradient,
          "w-full h-screen absolute top-0 pointer-events-none left-0 z-10"
        )}
      />
      <Image
        fluid={ourServicesBgImg.childImageSharp.fluid}
        className="absolute top-0 left-0 z-0 w-full h-screen pointer-events-none"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <IsomorphicAnchorLink
        to="/#catalog"
        stripHash
        className="absolute bottom-0 z-10 px-20 py-4 m-auto font-semibold text-center text-gray-100 uppercase whitespace-no-wrap -translate-x-1/2 bg-black border-2 border-black rounded-none mb-28 left-1/2"
      >
        Наши изделия
      </IsomorphicAnchorLink>
    </section>
  )
}

export default Hero
