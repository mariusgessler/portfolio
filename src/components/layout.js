import React from "react"
import Footer from "./footer"
import '../styles/layout.css'
import '../styles/typography.css'

const Layout = (props) => {
  return (
    <div>
      {props.children}
      <Footer/>
    </div>
  )
}
export default Layout;

