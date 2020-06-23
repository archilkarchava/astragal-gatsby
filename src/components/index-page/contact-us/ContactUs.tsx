import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const ContactUs: React.FC = () => {
  return (
    <section className="flex flex-col justify-between w-full overflow-hidden text-gray-900 bg-white md:flex-row">
      <div className="w-full md:w-1/2">
        <ContactInfo />
      </div>
      <div className="w-full bg-gray-100 md:w-1/2">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactUs
