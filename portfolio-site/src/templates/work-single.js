import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/seo";

export const query = graphql`
query($slug: String!) {
    contentfulWork(slug: {eq: $slug}) {
        title
        description {
            json
        }
    }
}`

const WorkSingle = (props, pageContext) => {
    console.log(props.pageContext.next)
    // const { previous, next } = this.props.pageContext
    // const  previous  = props.pageContext.previous
    // const  next  = props.pageContext.next
    // Set up options to specifiy how specific node types are rendered
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }
    
    return (
        
        <Layout>
            <SEO title={props.data.contentfulWork.title}></SEO>
            <h1>{props.data.contentfulWork.title}</h1>
            {documentToReactComponents(props.data.contentfulWork.description.json, options)}
            {props.pageContext.previous && (<Link to={`work/${props.pageContext.previous.slug}`} rel="prev">Previous: {props.pageContext.previous.title}</Link>)}

            {props.pageContext.next ? (<Link to={`work/${props.pageContext.next.slug}`} rel="next">Next: {props.pageContext.next.title}</Link>): <Link to="/about">About me</Link>}
        </Layout>
    )

}
export default WorkSingle;