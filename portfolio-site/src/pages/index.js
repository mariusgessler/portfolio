import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction";
import Card from "../components/card";
import Work from "../components/work";



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio" />
    {/* <Introduction/> */}
    <div className="work-cards">
      <Work/>
      <Card/>
    </div>
  </Layout>
)

export default IndexPage;

