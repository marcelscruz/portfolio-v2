import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'layout/layout'

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "DD/MM/YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges

    return (
        <Layout>
            {posts.map((post, index) => {
                const { title, slug, publishedDate } = post.node

                return (
                    <div key={index + title}>
                        <Link to={`/blog/${slug}`}>
                            <p>
                                {title} - {publishedDate}
                            </p>
                        </Link>
                    </div>
                )
            })}
        </Layout>
    )
}

export default Home
