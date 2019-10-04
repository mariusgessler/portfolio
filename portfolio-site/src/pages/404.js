import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, you just hit a route that doesn&#39;t exist...</p>
    <p>You can have a look at some of my work <Link to="/">here </Link>or learn a bit about myself<Link to="/about"> here.</Link></p>
  </Layout>
)

export default NotFoundPage
