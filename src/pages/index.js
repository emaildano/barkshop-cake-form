import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderForm from "../components/order-form"
import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OrderForm/>
  </Layout>
)

export default IndexPage
