import React from "react";
import { useStaticQuery, Link } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import SVG from "react-inlinesvg"; 
import Arrow from "../images/arrow.svg";
import Img from "gatsby-image";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "../components/theme";

const WorkContainer = styled.div`
margin: 50px auto 0;
  @media (min-width: 700px){
    margin-top: 0;
  }
`
const WorkItem = styled.div`
margin-top: 75px;`

const FeaturedImageContainer = styled.div`
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
  @media (min-width: 700px){
    max-width: 60%;
  }
`
const FeaturedImage = styled(Img)`
width: 100% ;
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
`
const InfoFooter = styled.div`
font-size:1rem;
display:flex;
justify-content: space-between;
`
const LearnMore = styled.div`
display:flex;
width: 180px;
align-items: center;
justify-content: center;
`

const TechnologyIcons = styled(SVG)`
.cls-1 {
  fill: ${props => props.theme.mg_lightgrey};
  transition: fill 1s ease;
}
width:25px;
margin-right:15px;`

const ArrowIcon = styled(SVG)`
fill: ${props => props.theme.mg_blue};
width: 16px;
height: 16px;
vertical-align: middle;
display:inline-block;
margin-left: 5px;
transition: margin-left .5s ease;
`

const StyledLink = styled(Link)`
font-weight: 400;
`
const Title = styled.h2`
font-size: 1.5rem;
font-weight: 400;
`
const WorkInfo = styled.div`
background-color: ${props => props.theme.mg_white};
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
padding: 12px 15px;
margin-top: 25px;
border-radius: 5px;
transition: background-color 0.9s ease;

&:hover {
  background-color:${props => props.theme.mg_blue};

}
&:hover ${Title} {
  color:${props => props.theme.mg_bg};
}
&:hover ${Excerpt} {
  color:${props => props.theme.mg_bg};
}
&:hover ${StyledLink} {
  color:${props => props.theme.mg_bg};
}
&:hover ${ArrowIcon} {
  fill:${props => props.theme.mg_bg};
}
&:hover ${TechnologyIcons} {
  .cls-1{
    fill:${props => props.theme.mg_bg};
  }
}
&:hover ${ArrowIcon}  {
  margin-left: 12px;
}

  @media (min-width: 700px) {
    position: relative;
    max-width: 400px;
    bottom: 55%;
    left: 25%;
    
  }
`
const PlxData = [
  {
    start: 'self',
    end: 'self',
    properties: [ {
      startValue: 0.1,
      endValue: 1,
      property: 'opacity'
    },{
      startValue: 0,
      endValue: -50,
      unit: '%',
      property: "translateY",
    }],
    }
]


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
      <ThemeProvider theme={Theme}>
      <WorkContainer>
      {data.allContentfulWork.edges.map(edge => (
        <WorkItem>
          <Link to={`work/${edge.node.slug}`}>
          <FeaturedImageContainer>
            <FeaturedImage style={{borderRadius: "4px"}} fluid={edge.node.featuredImage.fluid}></FeaturedImage>
          </FeaturedImageContainer>
          </Link>
        <ScrollAnimation animateIn="fadeInRight"> 
        <WorkInfo>
          <Link to={`work/${edge.node.slug}`}>
          <Title>{edge.node.subtitle}</Title>
          <Excerpt>{edge.node.excerpt}</Excerpt>
            <InfoFooter>
              <Technologies>
                  {edge.node.technologies.map((item)=> <TechnologyIcons src={item.file.url} />)}
              </Technologies>
              <LearnMore>
               <StyledLink to={`work/${edge.node.slug}`}>More Info<ArrowIcon src={Arrow}/></StyledLink>
               </LearnMore>
          </InfoFooter>
          </Link>
        </WorkInfo>
        </ScrollAnimation>
        </WorkItem>
      ))}
      </WorkContainer>
      </ThemeProvider>
    )
}
export default Work

// make the whloe box a link