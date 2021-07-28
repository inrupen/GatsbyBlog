import React, {Component} from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { ImageWrapper } from '../components/hero'

const OuterDiv = styled.div`
  background: #fff;
  box-shadow: -7px 7px 6px -6px #777;
  border-radius: 5px;
`
class BlogPostTemplate extends Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <OuterDiv>
          <ImageWrapper>
            <Img
              className="heroImage"
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </ImageWrapper>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </OuterDiv>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
