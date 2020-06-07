const React = require("react")
const { YMaps } = require("react-yandex-maps")
const { StoreContextProvider } = require("./src/contexts/siteContext")
const { enableES5 } = require("immer")

export const onClientEntry = () => {
  enableES5()
}

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
