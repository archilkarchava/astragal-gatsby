import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import ProductList from "../components/ProductList"
import SEO from "../components/SEO"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Главная" />
      <h1>Привет народ!</h1>
      <div className="max-w-md mb-6">
        <p>Добро пожаловать в наш магазин.</p>
        <p>Покупайте!</p>
      </div>
      <div className="max-w-md mb-6">
        <ProductList />
      </div>
      <Link to="/page-2/">Перейти на вторую страницу</Link>
    </Layout>
  )
}

// const Container = styled.div`
//   max-width: 300px;
//   margin-bottom: 1.45rem;
// `

export default IndexPage
