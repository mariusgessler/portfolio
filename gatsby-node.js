const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const workSingleTemplate = path.resolve('./src/templates/work-single.js')
    const res = await graphql(`
        query {
            allContentfulWork  {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }
        }
    `)

    const posts = res.data.allContentfulWork.edges
    posts.forEach((edge, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        
        createPage({
            component: workSingleTemplate,
            path: `/work/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                title: edge.node.title,
                previous,
                next
            }
        })
    })
}