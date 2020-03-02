import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'layout/layout'
import {
    ContentWrapper,
    BlogEntryContent,
    BlogEntryTitle,
    BlogEntryMetadata,
    // BlogEntryTimestampContainer,
    BlogEntryTimestamp,
    // BlogEntryReadTimeIcon,
    // BlogEntryReadTimeText,
    BlogEntryDescription,
} from 'components'
// import clock from 'assets/images/clock.png'

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        description
                        slug
                        publishedDate(formatString: "D MMMM YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <ContentWrapper>
                {posts.map((post, index) => {
                    const {
                        title,
                        description,
                        slug,
                        publishedDate,
                    } = post.node

                    return (
                        <BlogEntryContent key={index + title}>
                            <Link to={`/blog/${slug}`}>
                                <BlogEntryTitle>{title}</BlogEntryTitle>

                                <BlogEntryMetadata>
                                    <BlogEntryTimestamp>
                                        {publishedDate}
                                    </BlogEntryTimestamp>

                                    {/* <BlogEntryTimestampContainer>
                                        <BlogEntryReadTimeIcon src={clock} />

                                        <BlogEntryReadTimeText>
                                            5 min
                                        </BlogEntryReadTimeText>
                                    </BlogEntryTimestampContainer> */}
                                </BlogEntryMetadata>

                                <BlogEntryDescription>
                                    {description}
                                </BlogEntryDescription>
                            </Link>
                        </BlogEntryContent>
                    )
                })}
            </ContentWrapper>
        </Layout>
    )
}

export default Home
