import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout  pageTitle="About Us">
    <h1>About Us</h1>
    <p>Welcome to HP Laptops for Devs! Our team is dedicated to helping developers find the best laptops for their needs. We know that finding the right laptop can be a challenging task, especially for developers who need a powerful machine that can handle complex software and large data sets. That's why we've done the research and compiled a list of the best HP laptops for developers. Our reviews are based on factors like processor speed, memory, and storage, as well as design and portability. We hope our site helps you find the perfect laptop to support your development work!</p>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="about-us" />

export default IndexPage
