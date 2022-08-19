import React, { Component } from 'react'
import Component2 from './Component2'
import Component4 from './Component4'
export class Component1 extends Component {
  render() {
    return (
        <div>
      <div id='divHead'><p>Component</p></div>
      <Component2/>
      <Component4/>
      </div>
    )
  }
}

export default Component1