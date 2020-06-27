const React = require("react")
const { YMaps } = require("react-yandex-maps")
const { StoreContextProvider } = require("./src/contexts/siteContext")
import "./src/styles/global.css"

export const onClientEntry = () => {
  // Object-fit/Object-position polyfill for gatsby-image (IE), needs to be manually included when using with gatsby-plugin-preact
  const testImg = document.createElement("img")
  if (
    typeof testImg.style.objectFit === "undefined" ||
    typeof testImg.style.objectPosition === "undefined"
  ) {
    require("object-fit-images")()
    console.log("👍 Object-fit/Object-position are polyfilled")
  }
  if (typeof window.fetch === "undefined") {
    require("isomorphic-fetch")
    console.log("👍 Fetch is polyfilled")
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
