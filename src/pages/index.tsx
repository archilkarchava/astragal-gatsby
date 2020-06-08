import React from "react"
import Anchor from "../components/Anchor"
import ContactUs from "../components/ContactUs"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import OurAdvantages from "../components/OurAdvantages"
import ProductGrid from "../components/ProductGrid"
import SEO from "../components/SEO"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Главная" />
      <Hero />
      <Anchor id="catalog" />
      <ProductGrid />
      <OurAdvantages />
      <Anchor id="contact" />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
