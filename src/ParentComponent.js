import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      num:''
    }
  }
  getNumber=(event)=>{
    this.num = event.target.value
    this.setState({
      num:this.num
    })
  }
  render() {
    return (
      <div>
        Q2.  Pass a prop that contains a number from a parent component to child component and set the background color of enclosing div to red or blue depending on the number passed is even or odd
        <div id='parentDiv'>
          <input type='number' onChange={this.getNumber} style={{width:'20%'}}/>
          <ChildComponent num={this.num}/>
        </div>
      </div>
    )
  }
}

export default ParentComponent