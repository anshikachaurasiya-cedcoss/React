import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        bg:''
      }
    }
  render() {
        if(this.props.num%2===0){
            this.bg='red'
        }
        else{
            this.bg='blue'
        }
    return (
      <div id='enclosingDiv' className={this.bg}>
      </div>
    )
  }
}

export default ChildComponent