import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const Laptops =  ({data: {allWpLaptop: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const Laptop = item.node.laptopMeta;
        const slug = item.node.slug;
        return <Link to={`${slug}`}>
          <p key={item.node.id}>{Laptop.model} {Laptop.model}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query{
  allWpLaptop {
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
        }
        slug
        id
      }
    }
  }
}


`

export default Laptops