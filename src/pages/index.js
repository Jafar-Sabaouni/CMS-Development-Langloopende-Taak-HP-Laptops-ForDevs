import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  headerInfo,
  headerPicture,
  headerTitle,
} from "./page.module.css"
// imports


const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.picture.localFile)
  return (
    <Layout>
      <section>
          <h1>{homePage.title}</h1>
          <p>{homePage.description}</p>
          <div style={{width: '50%', height: '50%'}}>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.picture.localFile}
          />
          </div>
      </section>
    </Layout>
  )
}



export const query = graphql`
  query MyQuery {
    wpPage(title: {eq: "Home page"}) {
        id
        title
        homePage {
          title
          description
          fieldGroupName
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

export const Head = () => <Seo title="Home" />
 */
export default IndexPage
