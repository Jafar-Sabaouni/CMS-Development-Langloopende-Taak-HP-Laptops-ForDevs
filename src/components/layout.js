import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  navLinkText
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
        <p>/</p>
        <header>{data.site.siteMetadata.title}</header>
        </div>
        <ul >
          <li></li>
          <li >
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navLinkText} to="/laptops">
            Laptops
            </Link>
          </li>
          <li>
            <Link className={navLinkText} to="/about-us">
            about us
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout