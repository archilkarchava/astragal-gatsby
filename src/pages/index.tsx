import React from "react"
import Anchor from "../components/common/Anchor"
import SEO from "../components/common/SEO"
import ContactUs from "../components/index-page/contact-us"
import Hero from "../components/index-page/Hero"
import OurAdvantages from "../components/index-page/our-advantages"
import ProductGrid from "../components/index-page/product-grid"
import Layout from "../components/layout"

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
