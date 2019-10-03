import React from "react";
import ReactLogo from "../images/technologies/react-logo.svg";
import IonicLogo from "../images/technologies/ionic-logo.svg";
import { useStaticQuery } from "gatsby";
import Layout from "./layout";



const Work = () => {
  const data = useStaticQuery(graphql`
query {
   allContentfulWork {
    edges {
      node {
        title
        excerpt
        featuredImage {
          file {
            url
          }
        }
        technologies
      }
    }
  }
}
`)
    return (
        <div>
             <h2>recent work.</h2>
      {data.allContentfulWork.edges.map(edge => (
        <div>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.excerpt}</p>
        <img src={edge.node.featuredImage.file.url}></img>
        <p>Technologies: {edge.node.technologies}</p>

        </div>
      ))}
      </div>
    )
}
export default Work