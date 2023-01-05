import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import {mainContainer,background}from "./about-us.module.css"




const IndexPage = () => (
  <Layout>
    <section className={background}>
    <main className={mainContainer}>
      <h1>About Us</h1>
      <p>Welcome to HP Laptops for Devs, a website dedicated to helping developers find the perfect laptop for their needs. We understand that as a developer, you have unique requirements for your laptop, and we are here to help you find the best machine to meet those needs.</p>
      <p>Our team is made up of experienced developers who have tested and reviewed a wide range of laptops. We take into consideration factors such as processor speed, graphics capabilities, storage, and overall performance to ensure that you are getting the most powerful and reliable machine possible.</p>
      <p>In addition to providing recommendations, we also offer a range of resources and tips for developers looking to optimize their laptop setup. From choosing the right operating system to setting up a comfortable and efficient workspace, we have you covered.</p>
      <p>Thank you for visiting HP Laptops for Devs. We hope you find our website helpful in your search for the perfect laptop.</p>
    </main>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="about-us" />

export default IndexPage
