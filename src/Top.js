import React, { Component } from 'react'
import Down from './Down'
export class Top extends Component {
  render(props) {
    return (
      <div>
        <Down username={this.props.username}/>
      </div>
    )
  }
}

export default Top