import React from "react"
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

