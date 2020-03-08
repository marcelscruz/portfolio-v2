import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ContentWrapper } from 'components'
import {
    PostTitle,
    PostMetadata,
    PostTimestamp,
    PostReadTimeContainer,
    PostReadTimeIcon,
    PostReadTimeText,
    PostBody,
} from 'components/post/post.styles'
import clock from 'assets/images/clock.png'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
            fields {
                readingTime {
                    text
                }
            }
        }
    }
`

export const Post = props => {
    const { frontmatter, fields, html } = props.data.markdownRemark
    const { title, date } = frontmatter
    const { readingTime } = fields

    return (
        <>
            <Helmet title={title} />

            <ContentWrapper>
                <PostTitle>{title}</PostTitle>

                <PostMetadata>
                    <PostTimestamp>{date}</PostTimestamp>

                    <PostReadTimeContainer>
                        <PostReadTimeIcon src={clock} />

                        <PostReadTimeText>{readingTime.text}</PostReadTimeText>
                    </PostReadTimeContainer>
                </PostMetadata>

                <PostBody dangerouslySetInnerHTML={{ __html: html }} />
            </ContentWrapper>
        </>
    )
}

export default Post
