import React, { Component } from 'react'
import Component1 from './Component1'
export class ReactAppComponent extends Component {
  render() {
    return (
      <div id='mainDiv'>
        <p>React App</p>
        <Component1/>
      </div>
    )
  }
}
export default ReactAppComponent