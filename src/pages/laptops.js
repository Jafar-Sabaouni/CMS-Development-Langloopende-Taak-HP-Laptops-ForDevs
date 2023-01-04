import * as React from "react"
import { useState,useEffect } from "react";
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LaptopSearchInput from "../components/LaptopSearchInput"
import laptopDataSearch from "../components/laptopsDataSearch"
import LaptopSortInput from "../components/laptopSortInput"
import laptopDataSort from "../components/laptopDataSort"

import LaptopsList from "../components/Laptoplist"
import {
  sortAndSearchContainer,
  laptopPageDescription
} from "./Laptops.module.css"


const Laptops = ({ data: { allWpLaptop: { edges } } }) => {

  // array of laptops the reason why i put it in a seperate variable is to i can filter itµ
  
  const [laptopData, setLaptopData] = useState(edges);
  const [search, setSearch] = useState("");
  const [sort, setsort] = useState("");
  const changesearch = (e) => {
    setSearch(e)
  };
  const changesort = (e) => {
    setsort(e)
  };

  return (
    <Layout >
      <main >
        <p className={laptopPageDescription}>Welcome to the laptop page! This page is designed to help you find the best HP laptop for your needs as a developer. Whether you're a beginner or an experienced professional, we have a range of options that can meet your requirements.</p>
        <div className={sortAndSearchContainer}>
        <LaptopSortInput onClicked={changesort}></LaptopSortInput>
        <LaptopSearchInput onClicked={changesearch}></LaptopSearchInput>
        </div>
         
        <LaptopsList sort={sort} laptopData={laptopData} search={search} ></LaptopsList>
        

      </main>
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

export default Laptops