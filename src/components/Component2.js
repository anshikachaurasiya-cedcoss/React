import React, { Component } from 'react'
import Component3 from './Component3'
export class Component2 extends Component {
  render() {
    return (
        <div id='leftDiv'><p>Component</p>
        <Component3/>
        <Component3/>
        </div>
    )
  }
}
export default Component2