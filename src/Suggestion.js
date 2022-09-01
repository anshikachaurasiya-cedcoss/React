import React, { Component } from 'react'

export class Suggestion extends Component {
  arr=['Neha','khushi','Rahul','kunti','Arvind','Anshika','Omkar','Riddhi','John','Aman','Anish','Bunty','Garima','Ganesh']

  constructor(props) {
    super(props)
  
    this.state = {
      items:[]
    }
  }
  getValue=(event)=>{
    let value= event.target.value
    this.state.items=[]
    if(value!==""){
      for(let i=0;i<this.arr.length;i++){
        if(value.toLowerCase()===this.arr[i].slice(0,value.length).toLowerCase()){
          this.state.items.push(this.arr[i])
        }
      }
    }
    this.setState({
      items:this.state.items
    })
  }
  render() {
    return (
      <div id='suggestion'>
        <input type='text' onChange={this.getValue} value={this.state.value}/>
        <div id='dropdown'>
          {this.state.items.map((x)=>(
            <option value={x}>{x}</option>
          ))}
        </div>
      </div>
    )
  }
}

export default Suggestion