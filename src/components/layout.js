import React, {Component} from 'react'
import './base.css'
import Navigation from './navigation'
import { Footer } from './footer'

class Template extends Component {
  render() {
    const { children } = this.props
    return (
      <div id="container">
        <Navigation id="navigation" />
        <main>
          <div id="content">
              {children}
          </div>
        </main>
        <Footer id="footer" />
      </div>
    )
  }
}

export default Template
