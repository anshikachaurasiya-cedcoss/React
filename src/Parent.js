import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
  render(props) {

    return (
      <div>
        <Child num1='5' num2='4' operator='*'/>
      </div>
    )
  }
}

export default Parent