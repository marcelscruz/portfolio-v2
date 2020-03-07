import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'layout/layout'
import {
    ContentWrapper,
    BlogEntryContent,
    BlogEntryTitle,
    BlogEntryMetadata,
    BlogEntryTimestamp,
    BlogEntryReadTimeContainer,
    BlogEntryReadTimeIcon,
    BlogEntryReadTimeText,
    BlogEntryDescription,
} from 'components'
import clock from 'assets/images/clock.png'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            date
                        }
                        html
                        fields {
                            slug
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges

    return (
        <Layout>
            <ContentWrapper>
                {posts.map((post, index) => {
                    const { title, description, date } = post.node.frontmatter
                    const { slug, readingTime } = post.node.fields

                    return (
                        <BlogEntryContent key={index + title}>
                            <Link to={`/blog/${slug}`}>
                                <BlogEntryTitle>{title}</BlogEntryTitle>

                                <BlogEntryMetadata>
                                    <BlogEntryTimestamp>
                                        {date}
                                    </BlogEntryTimestamp>

                                    <BlogEntryReadTimeContainer>
                                        <BlogEntryReadTimeIcon src={clock} />

                                        <BlogEntryReadTimeText>
                                            {readingTime.text}
                                        </BlogEntryReadTimeText>
                                    </BlogEntryReadTimeContainer>
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

export default Blog
