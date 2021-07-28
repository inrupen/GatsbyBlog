import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrapper = styled.div`
.previewTitle {
  font-size: 1.5em;
}

.tag {
  color: #A0A0A0;
  text-decoration: none;
  display: inline-block;
  padding: .33333rem .5rem;
  line-height: 1;
  border-radius: 10px;
  border: 1px solid #A0A0A0;
  margin-right: .5em;
}
`

export default ({ article }) => (
  <Wrapper>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className="previewTitle">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small> 
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <small className="tag">{article.tags}</small>
  </Wrapper>
)
