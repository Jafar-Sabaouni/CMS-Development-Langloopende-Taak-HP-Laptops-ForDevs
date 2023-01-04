import * as React from "react"
import { useState, useEffect } from "react";
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  LaptopImage
  , ItemContainer
  , LaptopTitle
  , laptopLink
  , LaptopTable
  , LaptopTableDevelopersTd
} from "../pages/home.module.css"


const LaptopsListItem = ({ item }) => {



  const image = getImage(item.node.laptopMeta.picture1.localFile)
  console.log(item.node.slug)

  
  return (
    <Link to={`laptops/${item.node.slug}`} className={laptopLink}><div className={ItemContainer}>
      <p className={LaptopTitle}>{item?.node.title}</p>
      <GatsbyImage className={LaptopImage} image={image} alt={item.node.laptopMeta.picture1.altText} />
      <table className={LaptopTable}>
        <tbody>
          <tr>
            <th>Model:</th>
            <td>{item.node.laptopMeta?.model}</td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>€{item.node.laptopMeta?.price}</td>
          </tr>
          <tr>
            <th>Ram:</th>
            <td>{item.node.laptopMeta?.ram}</td>
          </tr>
          <tr>
            <th>Storage:</th>
            <td>GB{item.node.laptopMeta?.storage}</td>
          </tr>
          <tr>
            <th>Developers:</th>
            <td className={LaptopTableDevelopersTd} >{item.node.developers.nodes?.map((item) => {
              return <p>{item.name}</p>
            })}
            </td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>
    </div></Link>
  )
}
export default LaptopsListItem;