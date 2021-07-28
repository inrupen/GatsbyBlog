import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const ImageWrapper = styled.div`
.hero {
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
}

.heroImage {
  height: 61.8vh;
  max-height: 400px;
  box-shadow: -7px 7px 6px -6px #777;
  border-radius: 5px;
}

.heroDetails {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;
}

@media(min-width: 600px) {
  .heroDetails {
    font-size: 16px;
  }
}

@media(min-width: 1000px) {
  .heroDetails {
    font-size: 20px;
  }
}

.heroHeadline {
  margin: 0;
}

.heroTitle {
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
}
` 
export default ({ data }) => (
  <ImageWrapper>
    <Img
      className="heroImage"
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className="heroDetails">
      <h3 className="heroHeadline">{data.name}</h3>
      <p className="heroTitle">{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </ImageWrapper>
)
