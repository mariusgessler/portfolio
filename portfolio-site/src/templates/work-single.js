import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
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

const WorkSingle = props => {
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
        </Layout>
    )

}
export default WorkSingle;