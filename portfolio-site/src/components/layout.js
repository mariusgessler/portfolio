import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      {/* <Footer/> */}

    </div>
  )
}
export default Layout;