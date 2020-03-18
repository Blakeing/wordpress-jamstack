import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/layout.css"
import "@wordpress/block-library/build-style/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
        }
      }
    }
  `)

  const { title } = data.wpgraphql.generalSettings

  return (
    <>
      <header>
        <Link to="/" className="home">
          {title}
        </Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
