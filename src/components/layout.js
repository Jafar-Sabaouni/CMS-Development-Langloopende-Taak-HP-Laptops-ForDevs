import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  navLinkText,
  footer
} from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav >
        <div>
        <header>{data.site.siteMetadata.title}</header>
        </div>
        <ul >
          <li></li>
          <li >
            <Link className={navLinkText} to="/" activeStyle={{ color: "grey" }}>
              Home
            </Link>
          </li>
          <li>
            <Link className={navLinkText} to="/laptops" activeStyle={{ color: "grey" }}> 
            Laptops
            </Link>
          </li>
          <li>
            <Link className={navLinkText} to="/about-us" activeStyle={{ color: "grey" }}>
            about us
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className={footer}><p>© 2022 build by J for AP Hogeschool using reactjs Gatsby</p></footer>
    </div>
  )
}

export default Layout