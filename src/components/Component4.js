import React, { Component } from 'react'
import Component5 from './Component5'
export class Component4 extends Component {
  render() {
    return (
      <div id='rightDiv'><p>Component</p>
      <Component5/>
      </div>
    )
  }
}

export default Component4