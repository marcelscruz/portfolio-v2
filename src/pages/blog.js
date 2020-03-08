import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
        <ContentWrapper>
            {posts.map((post, index) => {
                const { title, description, date } = post.node.frontmatter
                const { slug, readingTime } = post.node.fields

                const isFirstOfType = index === 0
                const isLastOfType = index === posts.length - 1

                return (
                    <Link to={`/blog/${slug}`} key={index + title}>
                        <BlogEntryContent
                            isFirstOfType={isFirstOfType}
                            isLastOfType={isLastOfType}
                        >
                            <BlogEntryTitle>{title}</BlogEntryTitle>

                            <BlogEntryMetadata>
                                <BlogEntryTimestamp>{date}</BlogEntryTimestamp>

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
                        </BlogEntryContent>
                    </Link>
                )
            })}
        </ContentWrapper>
    )
}

export default Blog
