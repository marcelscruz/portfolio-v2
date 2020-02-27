import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Layout from 'layout/layout'
import {
    ContentWrapper,
    BlogEntryContent,
    BlogEntryTitle,
    BlogEntryMetadata,
    BlogEntryTimestamp,
    BlogEntryMetadataSeparator,
    BlogEntryReadTimeIcon,
    BlogEntryReadTimeText,
    BlogEntryDescription,
} from 'components'

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
                        publishedDate(formatString: "DD/MM/YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges

    const svgSize = {
        height: '14px',
        width: '14px',
    }

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

                                    <BlogEntryMetadataSeparator>
                                        •
                                    </BlogEntryMetadataSeparator>

                                    <BlogEntryReadTimeIcon>
                                        <FontAwesomeIcon
                                            style={svgSize}
                                            icon={faClock}
                                        />
                                    </BlogEntryReadTimeIcon>

                                    <BlogEntryReadTimeText>
                                        5 min
                                    </BlogEntryReadTimeText>
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
