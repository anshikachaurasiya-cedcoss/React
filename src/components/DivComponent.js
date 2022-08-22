import React, { Component } from 'react'
import ComponentImage5 from './ComponentImage5'
export class DivComponent extends Component {
  render() {
    return (
      <div id='mainDivImage'>
        <ComponentImage5/>
        <ComponentImage5/>
        <ComponentImage5/>
      </div>
    )
  }
}

export default DivComponent