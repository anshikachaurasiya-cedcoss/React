import React, { Component } from 'react'
export class MobileManuComponent extends Component {
  render() {
    return (
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul id='square'>
            <li>Samsung</li>
            <li>HTC</li>
        </ul>
        <ul>
            <li>Micromax</li>
        </ul>
        <ul id='circle'>
            <li>Apple</li>
        </ul>
      </div>
    )
  }
}

export default MobileManuComponent