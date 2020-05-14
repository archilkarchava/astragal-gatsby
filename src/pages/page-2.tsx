import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Вторая страница" />
    <h1>Привет со второй страницы</h1>
    <p>Добро пожаловать на вторую страницу нашего сайта.</p>
    <Link to="/">Вернуться на главную</Link>
  </Layout>
)

export default SecondPage
