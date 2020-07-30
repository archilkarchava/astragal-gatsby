import React from "react"
import { YMaps } from "react-yandex-maps"
import { StoreContextProvider } from "./src/contexts/siteContext"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <YMaps>{element}</YMaps>
    </StoreContextProvider>
  )
}
