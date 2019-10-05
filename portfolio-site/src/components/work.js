import React from "react";
import { useStaticQuery, Link } from "gatsby";
import SVG from "react-inlinesvg"; 
import ArrowIcon from "../images/arrow.svg";
import Img from "gatsby-image";
import styled from "styled-components";

const WorkContainer = styled.div`
max-width:290px;
margin: 50px auto 0;
`
const WorkItem = styled.div`
margin-top: 75px;`

const FeaturedImage = styled.div`
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
`

const Excerpt = styled.p`
font-size: 1rem;
font-weight: 200;
margin:0 0 25px;

`

const Technologies = styled.div`
width:300px;
display: flex;
align-items: center;
justify-content: start;
width: 155px;
`
const InfoFooter = styled.div`
font-size:1rem;
display:flex;
align-items: center;
fill: red;
`
const StyledSVG = styled(SVG)`
.cls-1 {
  fill: slategrey;
  transition: fill 1s ease;
}

width:25px;
margin-right:15px;`

const StyledLink = styled(Link)`
`
const Title = styled.h2`
font-size: 1.5rem;
font-weight: 400;

`
const WorkInfo = styled.div`
background-color: #f1f1f1;
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
padding: 12px 15px;
margin-top: 25px;
border-radius: 5px;
transition: background-color 0.9s ease;


&:hover {
  background-color:#145374;

}
&:hover ${Title} {
  color:#f4f4f4;
}
&:hover ${Excerpt} {
  color:#f4f4f4;
}
&:hover ${StyledLink} {
  color:#f4f4f4;
}
&:hover ${StyledSVG} {
  .cls-1{
    fill:#f4f4f4;
  }
}

`


const Work = () => {
  const data = useStaticQuery(graphql`
query {
    allContentfulWork {
    edges {
      node {
        description {
          json
        }
        technologies {
          file {
            url
          }
        }
        subtitle
        excerpt
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
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
          <Link to={`work/${edge.node.slug}`}>
          <FeaturedImage>
            <Img style={{borderRadius: "4px"}} fluid={edge.node.featuredImage.fluid}></Img>
          </FeaturedImage>
          </Link>
        <WorkInfo>
          <Title>{edge.node.subtitle}</Title>
          <Excerpt>{edge.node.excerpt}</Excerpt>
            <InfoFooter>
              <Technologies>
                  {edge.node.technologies.map((item)=> <StyledSVG src={item.file.url} />)}
              </Technologies>
               <StyledLink to={`work/${edge.node.slug}`}>More --></StyledLink>
          </InfoFooter>
        </WorkInfo>
        </WorkItem>
      ))}
      </WorkContainer>
    )
}
export default Work

// make the whloe box a link