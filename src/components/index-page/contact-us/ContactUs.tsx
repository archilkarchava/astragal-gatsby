import React from "react"
import ContactForm from "./contact-form"
import ContactInfo from "./ContactInfo"

const ContactUs: React.FC = () => {
  return (
    <section className="flex flex-col justify-between w-full overflow-hidden text-gray-900 bg-white lg:flex-row">
      <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="w-full lg:w-1/2"
      >
        <ContactInfo />
      </div>
      <div
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
        className="w-full bg-gray-100 lg:w-1/2"
      >
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactUs
