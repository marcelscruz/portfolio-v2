import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Head } from 'components'
import Layout from 'layout'

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
            <Head title="marcel cruz" />

            {/* <Posts>
                {posts.map((post, index) => {
                    const { title, slug, publishedDate } = post.node

                    return (
                        <Post key={index + title}>
                            <Link to={`/${slug}`}>
                                <Title>{title}</Title>
                                <PublishedDate>{publishedDate}</PublishedDate>
                            </Link>
                            {index !== posts.length - 1 && <Separator />}
                        </Post>
                    )
                })}
            </Posts> */}
        </Layout>
    )
}

export default Home
