const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/components/post/post.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: postTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        })
    })
}
