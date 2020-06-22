import loadable from "@loadable/component"
import React from "react"
import { useShowMap } from "../../../hooks/contextHooks"

const YandexMap = loadable(() => import("./YandexMap"))

const Map: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>()
  const [isShowMap, setIsShowMap] = useShowMap()
  const handleShowMap = React.useCallback(() => {
    if (
      window.pageYOffset > sectionRef.current.getBoundingClientRect().height
    ) {
      setIsShowMap(true)
    }
  }, [sectionRef, setIsShowMap])

  React.useEffect(() => {
    handleShowMap()
  }, [handleShowMap])

  React.useEffect(() => {
    window.addEventListener("scroll", handleShowMap)
    return () => {
      window.removeEventListener("scroll", handleShowMap)
    }
  }, [handleShowMap])

  return (
    <section ref={sectionRef} className="w-full h-72 md:h-112">
      {isShowMap && <YandexMap width="100%" height="100%" />}
    </section>
  )
}

export default Map
