import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from 'react-helmet'
import Layout from 'layout/layout'
import { Container, Title, PublishedDate, Body, Separator } from './post.styles'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "DD/MM/YYYY")
            body {
                json
            }
        }
    }
`

export const Post = props => {
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

    return (
        <Layout hasFooter>
            <Helmet title={props.data.contentfulBlogPost.title} />

            <Separator />
            <Container>
                <Title>{props.data.contentfulBlogPost.title}</Title>
                <PublishedDate>
                    {props.data.contentfulBlogPost.publishedDate}
                </PublishedDate>
                <Body>
                    {documentToReactComponents(
                        props.data.contentfulBlogPost.body.json,
                        options,
                    )}
                </Body>
            </Container>
            <Separator />
        </Layout>
    )
}

export default Post
