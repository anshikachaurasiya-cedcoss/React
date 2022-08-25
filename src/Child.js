import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <h3>{eval(parseInt(this.props.num1) + this.props.operator + parseInt(this.props.num2))}</h3>
      </div>
    )
  }
}

export default Child