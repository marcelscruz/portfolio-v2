import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            description
            publishedDate(formatString: "D MMMM YYYY")
            body {
                json
            }
        }
    }
`

export const Post = ({ data }) => {
    const options = {
        renderNode: {
            'embedded-asset-block': node => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url

                return <img alt={alt} src={url} />
            },
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [
                    ...children,
                    index > 0 && <br key={index} />,
                    textSegment,
                ]
            }, [])
        },
    }

    const {
        contentfulBlogPost: { title, publishedDate, body },
    } = data

    return (
        <Layout hasFooter>
            <Helmet title={title} />

            <ContentWrapper>
                <PostTitle>{title}</PostTitle>

                <PostMetadata>
                    <PostTimestamp>{publishedDate}</PostTimestamp>

                    <PostReadTimeContainer>
                        <PostReadTimeIcon src={clock} />

                        <PostReadTimeText>5 min</PostReadTimeText>
                    </PostReadTimeContainer>
                </PostMetadata>

                <PostBody>
                    {documentToReactComponents(body.json, options)}
                </PostBody>
            </ContentWrapper>
        </Layout>
    )
}

export default Post
