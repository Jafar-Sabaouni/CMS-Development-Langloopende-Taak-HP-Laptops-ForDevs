import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LaptopsRecomendationList from "../components/LaptopsRecomendationList"
import Contact from "../components/contact"
import {

  headerPicture,
  mainContainer,
  headerContainer,
  contactContainer,
} from "./index.module.css"
// imports


const IndexPage = ({
  data: {
    wpPage: { homePage }, allWpLaptop:{ edges }
  },
}) => {
  const image = getImage(homePage.picture.localFile)
  return (
    <Layout>
     <main className={mainContainer}>
      <section className={headerContainer}>
        <GatsbyImage 
            image={image}
            className={headerPicture}
            alt={homePage.picture.localFile}
          />
          <div>
          <h1>{homePage.title}</h1>
          <p>{homePage.description}</p>
          <LaptopsRecomendationList laptopData={edges}   LigtOrDarkMode={false}/>
          </div>
      </section>
      <Contact/>
      </main>
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
    allWpLaptop( limit: 3) {
      edges {
        node {
          title
          developers {
            nodes {
              name
            }
          }
          laptopMeta {
            cpu
            description
            fieldGroupName
            gpu
            model
            storagetype
            storage
            screensize
            ram
            price
            picture1 {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              altText
            }
          }
          slug
          id
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
