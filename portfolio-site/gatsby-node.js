const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const workSingleTemplate = path.resolve('./src/templates/work-single.js')
    const res = await graphql(`
        query {
            allContentfulWork {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulWork.edges.forEach((edge) => {
        createPage({
            component: workSingleTemplate,
            path: `/work/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}