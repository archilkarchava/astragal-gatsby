import loadable from "@loadable/component"
import React from "react"
import { useShowMap } from "../hooks/contextHooks"
import useSiteMetadata from "../hooks/useSiteMetadata"

const YandexMap = loadable(() => import("./YandexMap"))

const ContactUs: React.FC = () => {
  const { addresses, emails, phoneNumbers } = useSiteMetadata()
  const [isShowMap, setIsShowMap] = useShowMap()
  const contentRef = React.useRef<HTMLDivElement>()

  const handleShowMap = React.useCallback(() => {
    if (
      window.pageYOffset > contentRef.current.getBoundingClientRect().height
    ) {
      setIsShowMap(true)
    }
  }, [contentRef, setIsShowMap])

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
    <div
      ref={contentRef}
      className="flex flex-col justify-between w-full overflow-hidden text-gray-900 bg-white md:flex-row"
    >
      <div className="flex items-center mx-auto">
        <div className="py-10 m-auto md:p-0">
          <h1 className="mb-5 text-3xl font-bold leading-none lg:text-4xl">
            Свяжитесь с нами
          </h1>
          {phoneNumbers.map((phoneNumber) => {
            return (
              <a
                key={phoneNumber}
                className="block mb-2 text-base"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
            )
          })}
          {emails.map((email) => {
            return (
              <a
                key={email}
                className="block mb-2 text-base"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            )
          })}
          <div className="block text-base">
            {addresses[0].city}, ул. {addresses[0].street}{" "}
            {addresses[0].streetNo}
          </div>
        </div>
      </div>
      <div className="w-full h-112 lg:h-128 md:w-1/2">
        {isShowMap && <YandexMap />}
      </div>
    </div>
  )
}

export default ContactUs
