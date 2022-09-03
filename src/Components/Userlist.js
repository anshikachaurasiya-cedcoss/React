import React, { Component } from 'react'

export class Userlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        getInp:'',arr:[]
      }
    }
    inputVal=(event)=>{
        this.setState({
            getInp:event.target.value
        })
    }
    addBtn=()=>{
        this.state.arr.push(this.state.getInp)
        this.setState({arr:this.state.arr})
    }
    delete=(event)=>{
        this.state.arr.splice((event.target.value),1)
        this.setState({arr:this.state.arr})
    }
  render() {
    return (
      <div id='userList'>
        <div id='header'>
            <input onChange={this.inputVal} value={this.state.getInp}/>
            <button onClick={this.addBtn}>Add</button>
        </div>
        <table>{this.state.arr.map((item,ind)=> <tr><span value={ind} onClick={this.delete}>x</span><td>{item}</td></tr>)}</table>
      </div>
    )
  }
}

export default Userlist