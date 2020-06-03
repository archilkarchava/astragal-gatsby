import React from "react"
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
      <div id="catalog" />
      <ProductGrid />
      <OurAdvantages />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
