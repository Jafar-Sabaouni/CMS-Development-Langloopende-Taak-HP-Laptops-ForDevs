import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Slider from "react-slick";
import LaptopsRecomendationList from "../../components/LaptopsRecomendationList"
import {
  datailContainer,
  LaptopTable,
  LaptopTableDevelopersTd,
  laptopImage,
  imageSlider,
  laptopContainer,
  description
} from "./Laptop.module.css"

const ArtistPage = ({
  data: {
    wpLaptop: { laptopMeta: laptop, developers: developers, title: title }, allWpLaptop:{ edges }
  },
}) => {
  const image1 = getImage(laptop.picture1.localFile)
  const image2 = getImage(laptop.picture2.localFile)
  const image3 = getImage(laptop.picture3.localFile)
  const sliderSettings = {
    dots: true,
    infinite: true,
    buttons: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,


  };
  console.log(edges)
  return (
    <Layout >
      <main className={laptopContainer}>

        <section className={datailContainer}>
          <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          <Slider className={imageSlider} {...sliderSettings}>
            
            <div><GatsbyImage className={laptopImage} image={image1} alt={laptop.picture1.altText} /></div>
            <div><GatsbyImage className={laptopImage} image={image2} alt={laptop.picture2.altText} /></div>
            <div><GatsbyImage className={laptopImage} image={image3} alt={laptop.picture3.altText} /></div>



          </Slider>
            <table className={LaptopTable}>
              <h1>{title}</h1>
              <tbody>
                <tr>
                  <th>Model:</th>
                  <td>{laptop.model}</td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td>€{laptop.price}</td>
                </tr>
                <tr>
                  <th>Ram:</th>
                  <td>{laptop.ram}</td>
                </tr>
                <tr>
                  <th>Storage:</th>
                  <td>GB{laptop.storage}</td>
                </tr>
                <tr>
                  <th>Storage type:</th>
                  <td>{laptop.storagetype}</td>
                </tr>

                <tr>
                  <th>cpu:</th>
                  <td>{laptop.cpu}</td>
                </tr>
                <tr>
                  <th>gpu:</th>
                  <td>{laptop.gpu}</td>
                </tr>
                <tr>
                  <th>screensize:</th>
                  <td>{laptop.screensize}</td>
                </tr>
                <tr>
                  <th>Developers:</th>
                  <td className={LaptopTableDevelopersTd} >{developers.nodes?.map((item) => {
                    return <p>{item.name}</p>
                  })}
                  </td>
                </tr>
                <tr>
                </tr>
              </tbody>
              <p className={description}>{laptop.description}</p>
            </table>

        </section>
        

      </main>
      <LaptopsRecomendationList laptopData={edges}   LigtOrDarkMode={true}/>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
  wpLaptop(slug: {eq: $slug}) {
    laptopMeta {
      cpu
      description
      fieldGroupName
      gpu
      model
      price
      ram
      screensize
      storage
      storagetype
      picture1 {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      picture2 {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      picture3 {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
    developers {
      nodes {
        name
      }
    }
    title
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

export default ArtistPage