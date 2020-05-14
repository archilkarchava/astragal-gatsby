import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Страница не найдена" />
    <h1>Такой страницы не существует.</h1>
    <p>Вы перешли на страницу которой не существует.</p>
  </Layout>
)

export default NotFoundPage
