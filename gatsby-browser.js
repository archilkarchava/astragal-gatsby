require("./src/styles/global.css")
const React = require("react")
const { YMaps } = require("react-yandex-maps")
const { StoreContextProvider } = require("./src/contexts/siteContext")
const { enableMapSet } = require("immer")

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  enableMapSet()
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
