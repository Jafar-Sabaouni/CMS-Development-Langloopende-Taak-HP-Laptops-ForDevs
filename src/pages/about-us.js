import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {mainContainer,background}from "./about-us.module.css"





const AboutUs  = ({
  data: {
    wpPage: { title ,aboutUs},
  },
}) => {
  return(
  <Layout>
    <section className={background}>
    <main className={mainContainer}>
      <h1>{title}</h1>
      <p>{aboutUs.description1}</p>
      <p>{aboutUs.description2}</p>
      <p>{aboutUs.description3}</p>
      <p>{aboutUs.endtext}</p>

      </main>
    </section>
  </Layout>)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="about-us" />


export const query = graphql`
query MyQuery {
  wpPage(slug: {eq: "about-us"}) {
    title
    aboutUs {
      description1
      description2
      description3
      endtext
    }
  }
}



`
export default AboutUs
