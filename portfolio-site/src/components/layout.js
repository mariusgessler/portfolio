import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = (props) => {
  return (
    <div>
      {props.children}
      <Footer/>

    </div>
  )
}
export default Layout;

