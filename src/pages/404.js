import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {

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

