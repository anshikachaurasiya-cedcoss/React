import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        bg:''
      }
    }
    changeBg=()=>{
        if(this.props.num%2===0){
          this.bg='red'
          this.setState({
            bg:this.bg
          })
        }
        else{
          this.bg='blue'
          this.setState({
            bg:this.bg
          })
        }
      
    }
  render() {
    return (
      <div id='enclosingDiv' className={this.bg}>
        <button id='btn' onClick={this.changeBg}>Change Background</button>
      </div>
    )
  }
}

export default ChildComponent