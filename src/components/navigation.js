import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 10vh;
    max-height: 80px;
    font-size: 1.25em;
  }

  .navigationItem {
    display: inline-flex;
    align-items: center;
    margin: 0 0.5rem;
  }

  .navigationItem a {
    color: currentColor;
  }
`

export default () => (
  <Nav role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navigationItem">
        <Link to="/blog/">Published</Link>
      </li>
    </ul>
  </Nav>
)
