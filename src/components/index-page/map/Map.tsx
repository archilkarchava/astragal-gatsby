import loadable from "@loadable/component"
import throttle from "lodash/throttle"
import React from "react"
import { useShowMap } from "../../../hooks/contextHooks"

const YandexMap = loadable(() => import("./YandexMap"))

const Map: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>()
  const [isShowMap, setIsShowMap] = useShowMap()

  React.useEffect(() => {
    const handleShowMap = throttle(() => {
      if (
        window.pageYOffset > sectionRef.current.getBoundingClientRect().height
      ) {
        setIsShowMap(true)
        window.removeEventListener("scroll", handleShowMap)
      }
    }, 5)
    window.addEventListener("scroll", handleShowMap)
    return () => {
      window.removeEventListener("scroll", handleShowMap)
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full h-72 md:h-149">
      {isShowMap && <YandexMap width="100%" height="100%" />}
    </section>
  )
}

export default Map
