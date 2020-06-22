import React from "react"
import useSiteMetadata from "../../../hooks/useSiteMetadata"
import ContactForm from "./ContactForm"

const ContactUs: React.FC = () => {
  const { addresses, emails, phoneNumbers } = useSiteMetadata()

  return (
    <section className="flex flex-col justify-between w-full py-2 overflow-hidden text-gray-900 bg-white md:py-8 md:flex-row">
      <div className="w-full md:w-2/3">
        <div className="flex flex-col items-center justify-center h-full py-10 md:p-0">
          <div>
            <h2 className="mb-10 text-3xl font-semibold leading-none lg:text-4xl">
              Контакты
            </h2>
            <div className="mb-3">
              {phoneNumbers.map((phoneNumber) => (
                <a
                  key={phoneNumber}
                  className="mb-2 text-lg"
                  href={`tel:${phoneNumber}`}
                >
                  {phoneNumber}
                </a>
              ))}
            </div>
            <div className="mb-3">
              {emails.map((email) => (
                <a
                  key={email}
                  className="mb-2 text-lg"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              ))}
            </div>
            <div className="mb-3 text-lg">
              {addresses[0].city}, ул. {addresses[0].street}{" "}
              {addresses[0].streetNo}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactUs
