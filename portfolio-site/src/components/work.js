import React from "react";
import ReactLogo from "../images/technologies/react-logo.svg";
import IonicLogo from "../images/technologies/ionic-logo.svg";
import { useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const WorkContainer = styled.div`
max-width:290px;
margin: 0 auto;
`
const WorkItem = styled.div`
background-color: #f1f1f1;
box-shadow: 0 1em 2em 0 rgba(0,0,0,.3);
padding: 12px 15px;
`

const Title = styled.h2`
font-size: 1.5rem;
font-weight: 400;
`

const Excerpt = styled.p`
font-size: 1rem;
font-weight: 200;
`

const Work = () => {
  const data = useStaticQuery(graphql`
query {
   allContentfulWork {
    edges {
      node {
        title
        excerpt
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        technologies
        slug
      }
    }
  }
}
`)
    return (
        <WorkContainer>
          
      {data.allContentfulWork.edges.map(edge => (
        <WorkItem>
          <Title>{edge.node.title}</Title>
          <Excerpt>{edge.node.excerpt}</Excerpt>
        <Img fluid={edge.node.featuredImage.fluid}></Img>
        <p>Technologies: {edge.node.technologies}</p>
        <Link to={`work/${edge.node.slug}`}>Go to project.</Link>

        </WorkItem>
      ))}
      </WorkContainer>
    )
}
export default Work