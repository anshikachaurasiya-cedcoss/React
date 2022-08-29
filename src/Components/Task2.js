import React, { Component } from 'react'

export class Task2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increase=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }
    decrease=()=>{
        if(this.state.count!==0)
        {
            this.setState({count:this.state.count-1})
        }
    }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <span style={{fontSize:'3rem'}}>{this.state.count}</span>
        <br></br>
        <button className='idBtn' onClick={this.increase}>Increase</button>
        <button className='resetBtn' onClick={this.reset}>Reset</button>
        <button className='idBtn' onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

export default Task2