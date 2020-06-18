const React = require("react")
const { YMaps } = require("react-yandex-maps")
const { StoreContextProvider } = require("./src/contexts/siteContext")
const { enableES5 } = require("immer")
const { polyfill } = require("es6-promise")
import "./src/styles/global.css"

export const onClientEntry = () => {
  require("custom-event-polyfill")
  polyfill()
  require("isomorphic-fetch")
  enableES5()
}

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
