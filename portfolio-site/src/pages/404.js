import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You can have a look at some of my work <Link to="/">here </Link>or learn a bit about myself<Link to="/about"> here.</Link></p>
      </>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
