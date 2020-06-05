require("./src/styles/global.css")
const React = require("react")
const { YMaps } = require("react-yandex-maps")
const { StoreContextProvider } = require("./src/contexts/siteContext")
const { enableES5 } = require("immer")

export const onClientEntry = () => {
  enableES5()
  //   // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  // if (!(`IntersectionObserver` in window)) {
  //   require(`intersection-observer`)
  //   // console.log(`IntersectionObserver is polyfilled!`)
  // }
  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`)
  if (
    typeof testImg.style.objectFit === `undefined` ||
    typeof testImg.style.objectPosition === `undefined`
  ) {
    require(`object-fit-images`)()
    // console.log(`Object-fit/Object-position are polyfilled!`)
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
