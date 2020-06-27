import loadable from "@loadable/component"
import debounce from "lodash/debounce"
import React from "react"
import { useShowMap } from "../../../hooks/contextHooks"

const YandexMap = loadable(() => import("./YandexMap"))

const Map: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>()
  const [isShowMap, setIsShowMap] = useShowMap()

  const handleShowMap = React.useCallback(
    debounce(() => {
      if (
        window.pageYOffset > sectionRef.current.getBoundingClientRect().height
      ) {
        setIsShowMap(true)
        window.removeEventListener("scroll", handleShowMap)
      }
    }, 5),
    []
  )

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
    <section ref={sectionRef} className="w-full h-72 md:h-149">
      {isShowMap && <YandexMap width="100%" height="100%" />}
    </section>
  )
}

export default Map
