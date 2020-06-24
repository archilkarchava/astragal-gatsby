import React from "react"
import useSiteMetadata from "../../../hooks/useSiteMetadata"

const ContactInfo: React.FC = () => {
  const { addresses, emails, phoneNumbers } = useSiteMetadata()
  return (
    <div className="flex flex-col justify-center h-full p-10 lg:items-center md:p-20">
      <div>
        <h2 className="mb-10 text-3xl font-semibold leading-none lg:text-4xl">
          Контакты
        </h2>
        <div className="mb-3">
          {phoneNumbers.map((phoneNumber) => (
            <React.Fragment key={phoneNumber}>
              <a className="mb-2 text-lg" href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>{" "}
              <span className="inline-block text-sm text-gray-800">
                (Viber, WhatsApp, Telegram, Звонок)
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="mb-3">
          {emails.map((email) => (
            <a key={email} className="mb-2 text-lg" href={`mailto:${email}`}>
              {email}
            </a>
          ))}
        </div>
        <div className="mb-3 text-lg">
          {addresses[0].city}, ул. {addresses[0].street} {addresses[0].streetNo}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
