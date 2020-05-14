/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title} />
      <div className="max-w-3xl px-4 pt-0 pb-6 mx-auto my-0">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {data.site?.siteMetadata?.title}
        </footer>
      </div>
    </>
  )
}

// const Container = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
//   padding: 0 1.0875rem 1.45rem;
// `

export default Layout
