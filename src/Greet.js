import React, { Component } from 'react'

export class Greet extends Component {
  render(props) {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}

export default Greet