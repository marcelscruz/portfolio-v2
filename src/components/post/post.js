import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from 'layout/layout'
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
        }
    }
`

export const Post = props => {
    const { frontmatter, html } = props.data.markdownRemark
    const { title, date } = frontmatter

    return (
        <Layout hasFooter>
            <Helmet title={title} />

            <ContentWrapper>
                <PostTitle>{title}</PostTitle>

                <PostMetadata>
                    <PostTimestamp>{date}</PostTimestamp>

                    <PostReadTimeContainer>
                        <PostReadTimeIcon src={clock} />

                        <PostReadTimeText>5 min</PostReadTimeText>
                    </PostReadTimeContainer>
                </PostMetadata>

                <PostBody dangerouslySetInnerHTML={{ __html: html }} />
            </ContentWrapper>
        </Layout>
    )
}

export default Post
