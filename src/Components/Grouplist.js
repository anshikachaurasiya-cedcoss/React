import React, { Component } from 'react'

export class Grouplist extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      right:'>',
      left:'<',
      group1:['Ajax','JQuery','Javascript','MooTools','ProtoType','Dojo'],
      group2:['ASP.Net','C#','VB.Net','Java','PHP','Python'],
    }
  }
  grp1=[]
  grp2=[]
  select1=(event)=>{
    this.grp2 = []
    this.grp1.push(event.target.value)
  }
  select2=(event)=>{
    this.grp1=[]
    this.grp2.push((event.target.value))
  }
  rightBtn=()=>{
    this.grp1.map((item)=>{
      this.state.group2.push(item)
      this.state.group1.splice(this.state.group1.indexOf(item),1)
    })
    this.setState({group1:this.state.group1})
    this.setState({group2:this.state.group2}) 
    this.grp1=[]
    this.grp2=[]
  }
  leftBtn=()=>{
    this.grp2.map((item)=>{
      this.state.group1.push(item)
      this.state.group2.splice(this.state.group2.indexOf(item),1)
    }
    )
    this.setState({group1:this.state.group1})
    this.setState({group2:this.state.group2}) 
    this.grp1=[]
    this.grp2=[]

  }
  render() {
    return (
    <div id='container'>
      <div className='groups'>
        Group 1
          <select multiple>
            {this.state.group1.map((item)=> <option value={item} onClick={this.select1}>{item}</option>)}
          </select>
      </div>  
      <div id="buttons">
        <button onClick={this.rightBtn}>{this.state.right}</button>
        <button onClick={this.leftBtn}>{this.state.left}</button>
      </div>
      <div className='groups'>
        Group 2
        <select multiple >
          {this.state.group2.map((item)=> <option onClick={this.select2}>{item}</option>)}
        </select>
      </div>        
    </div>
    )
  }
}

export default Grouplist