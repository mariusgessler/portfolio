import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer"
import { graphql, Link } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ThemeProvider } from "styled-components";

import Theme from "../components/theme";
import SEO from "../components/seo";
import Img from "gatsby-image";
import styled from "styled-components";
import Header from "../components/header";

export const query = graphql`
query($slug: String!) {
    contentfulWork(slug: {eq: $slug}) {
        title
        goal
        linkTitle
        links
        description {
            json
        }
        bannerImage {
            fluid (quality: 80, maxWidth: 1200) {
                ...GatsbyContentfulFluid
            }
        }
    }
}`

const WorkSingleContainer = styled.div`
max-width: 900px
margin: 0 auto
padding: 1em;`

const Title = styled.h1`
font-size: 2.5rem;
font-weight: 500;
text-align: center;
`

const Subtitle = styled.h2`
text-align: center;
font-weight:100;
line-height: 1.5em;
font-size: 1.3rem;
    @media(min-width: 700px){
        font-size: 1.75rem;

    }
`
const LinkContainer = styled.div`
display: flex;
justify-content: center;`

const Links = styled.a`
margin: 15px;
font-size: 0.75em;
color:${props => props.theme.mg_grey}
    &:hover {
        color: ${props => props.theme.mg_blue}
    }
}`


const Text = styled.p`
font-weight: 200;
max-width: 800px;
margin: 35px auto;
font-size: 1rem;
line-height: 1.5em;
    @media(min-width: 1000px){
        margin: 35px auto;
    }
`


const Banner = styled(Img)`
box-shadow: 0 0.7em 1em 0 rgba(0,0,0,.3);
border-radius: 4px;

@media (min-width: 1000px) {
    width: 75%;
    margin: 0 auto;
}
`

const PaginationContainer = styled.div`
display:flex;
justify-content: space-between`

const Pagination = styled(Link)`
margin: 15px;
font-size: 0.8em;
color:${props => props.theme.mg_grey}
    &:hover {
        color: ${props => props.theme.mg_blue}
    }`

const figureStyles = {width: "100%",
                    maxWidth: "600px",
                    margin: "55px auto",
                    
}

const captionStyles = {width: "100%", 
                    fontSize: "0.6em", 
                    color: "#778899",
                    textAlign: "center",
                    fontWeight: "200",
                    margin: "15px 0" }

const screenshotStyles = {width: "100%",
                        boxShadow: "0 0.7em 1em 0 rgba(0,0,0,.3)",
                        borderRadius: "4px"}


const WorkSingle = (props) => {
    // Set up options to specifiy how specific node types are rendered
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const caption = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file['en-US'].url
                return <figure style={figureStyles}><img style={screenshotStyles} alt={caption} src={url}/><figcaption style={captionStyles}>{caption}</figcaption> </figure>// Rich text image = unfortunately I have not found an option to include Img yet
            },
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        },
    }
    
    return (

        <Layout>
        <Header/>

            <SEO title={props.data.contentfulWork.title}></SEO>
            <ThemeProvider theme={Theme}>
            <WorkSingleContainer>

            <Title>{props.data.contentfulWork.title}</Title>
            <Subtitle>{props.data.contentfulWork.goal}</Subtitle>
            <LinkContainer>
            {props.data.contentfulWork.links.map((link, index) => (
                <Links href={`${link}`} target="_blank">{props.data.contentfulWork.linkTitle[index]}
                </Links>
            ))}
            </LinkContainer>
            </WorkSingleContainer>

                        <Banner fluid={props.data.contentfulWork.bannerImage.fluid}/>
            <WorkSingleContainer>

            {documentToReactComponents(props.data.contentfulWork.description.json, options)}
           
     <PaginationContainer>
            {props.pageContext.previous ? (<Pagination to={`work/${props.pageContext.previous.slug}`}  rel="prev">Previous: {props.pageContext.previous.title}</Pagination>) : <span></span>}
                
            {props.pageContext.next ? (<Pagination to={`work/${props.pageContext.next.slug}`} rel="next">Next: {props.pageContext.next.title}</Pagination>): <Pagination to="/about">About me</Pagination>}
            </PaginationContainer>
            </WorkSingleContainer>
           
            </ThemeProvider>

        </Layout>
    )

}
export default WorkSingle;