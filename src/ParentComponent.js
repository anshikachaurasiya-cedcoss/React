import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  render() {
    return (
      <div>
        Q2.  Pass a prop that contains a number from a parent component to child component and set the background color of enclosing div to red or blue depending on the number passed is even or odd
        <div id='parentDiv'>
            <ChildComponent num='7'/>
        </div>
      </div>
    )
  }
}

export default ParentComponent