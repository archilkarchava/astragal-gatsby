import React from "react"
import { Map, MapProps, Placemark } from "react-yandex-maps"
import useSiteMetadata from "../../../hooks/useSiteMetadata"

const YandexMap: React.FC<MapProps> = (props) => {
  const siteInfo = useSiteMetadata()

  if (
    !siteInfo &&
    !siteInfo.addresses &&
    siteInfo.addresses.length === 0 &&
    !siteInfo.addresses[0].location.lat &&
    !siteInfo.addresses[0].location.lng
  ) {
    throw new Error("No data has been provided.")
  }
  return (
    <Map
      width="100%"
      height="100%"
      modules={["control.ZoomControl", "control.TypeSelector"]}
      state={{
        center: [
          siteInfo.addresses[0].location.lat,
          siteInfo.addresses[0].location.lng,
        ],
        zoom: 14,
        controls: ["zoomControl", "typeSelector"],
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      instanceRef={(ref: any) => {
        // eslint-disable-next-line no-unused-expressions
        ref && ref.behaviors.disable("scrollZoom")
      }}
      {...props}
    >
      <Placemark
        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        geometry={[
          siteInfo.addresses[0].location.lat,
          siteInfo.addresses[0].location.lng,
        ]}
        properties={{
          hintContent: `<div style='font-weight: bold;'>${siteInfo.title}</div><div>ул. ${siteInfo.addresses[0].street} ${siteInfo.addresses[0].streetNo}</div>`,
          balloonContentHeader: siteInfo.title,
          balloonContentBody: `ул. ${siteInfo.addresses[0].street} ${siteInfo.addresses[0].streetNo}`,
        }}
        options={{
          preset: "islands#redDotIcon",
        }}
      />
    </Map>
  )
}

export default YandexMap
