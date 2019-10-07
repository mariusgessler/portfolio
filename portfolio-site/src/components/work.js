import React, { Component } from "react";
import { StaticQuery, Link } from "gatsby";
import Fade  from 'react-reveal/Fade';
import ConditionalWrapper from "../utilis/conditional-wrapper";
import "animate.css/animate.min.css";
import SVG from "react-inlinesvg"; 
import Arrow from "../images/arrow.svg";
import Img from "gatsby-image";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Theme from "../components/theme";

const WorkContainer = styled.div`
margin: 50px auto 0;
  @media (min-width: 700px){
    margin-top: 0 auto;

  }
`
const WorkItem = styled.div`
margin-top: 75px;
  @media(min-width: 1100px){
    max-width: 850px;
    margin: 0 auto;
  }`


const FeaturedImageContainer = styled.div`
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
  @media (min-width: 700px){
    max-width: 300px;
  }
  @media (min-width: 850px) {
    max-width: 375px;
  }
`
const FeaturedImage = styled(Img)`
width: 100% ;
border-radius: 4px;
`

const Excerpt = styled.p`
font-size: 1rem;
font-weight: 200;
margin:0 0 25px;
  @media (min-width) {
    font-size: 0.8rem;
  }
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
font-weight: 500;
  @media (min-width: 700px) {
    font-size: 1.3rem
  }
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
  margin-left: 15px;
}

  @media (min-width: 700px) {
    position: relative;
    z-index: 999;
    background-color: white;
    opacity: 0.9;
    max-width: 400px;
    bottom: 10rem;
    left: 35%;
    
  }
`
// const isMobile = useMediaQuery ({query:'max-width: 700px'});

// //Create functional component to determin when <ScrollAnimation> should be renderen



class Work extends Component {
    constructor (props){
        super()
        this.state = {width: 0};
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({width: window.innerWidth})
    }
  
    render () {
        return (
      <ThemeProvider theme={Theme}>
      <WorkContainer>
      {this.props.edges.map(edge => (
        <WorkItem>
          <Link to={`work/${edge.node.slug}`}>
          <FeaturedImageContainer>
            <FeaturedImage fluid={edge.node.featuredImage.fluid}></FeaturedImage>
          </FeaturedImageContainer>
            </Link>

        <ConditionalWrapper condition={this.state.width < 700} ifWrapper={children => <Fade right>  {children} </Fade>} elseWrapper={children => <Fade bottom big>  {children} </Fade>} >

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
      </ConditionalWrapper>
        </WorkItem>
      ))}
      </WorkContainer>
      </ThemeProvider>
    )

    }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
          allContentfulWork{
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
    `}
    render={(data) => (
      <Work edges={data.allContentfulWork.edges} />
    )}
  />
)
