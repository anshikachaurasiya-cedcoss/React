import React, { Component } from 'react'

export class Task1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,msg:""
      }
    }
    check=()=>{
        this.setState({count:this.state.count+1},()=>{
            if(this.state.count%2===0){
                this.setState({msg:"even"})
            }
            else{
                this.setState({msg:"odd"})
            }
        })
      
    }
    render() {
        return (
        <div>
            <button onClick={this.check} style={{height:'40px',width:'20%',fontSize:'1rem',marginTop:'2%'}}>Clicked {this.state.count} Times</button>
            <p>{this.state.msg}</p>
        </div>
        )
    }
}

export default Task1