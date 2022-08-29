import React, { Component } from 'react'

export class Task4 extends Component {
    hr=0;min=0;sec=0;mil=99;x;flag=false;
    constructor(props) {
        super(props)
        
        this.state = {
            hr:0,min:0,sec:0,mil:99
        }
    }
    start=()=>{
        if(this.flag===false){
            this.flag=true;
            this.x = setInterval(this.stopWatch,10) 
        }
    }
    stop=()=>{
        this.flag=false;
        clearInterval(this.x)
    }
    reset=()=>{
        clearInterval(this.x)
        this.change();
        this.flag=false; 
    }
    change=()=>{
        this.hr=0
        this.min=0
        this.sec=0
        this.mil=0
        this.setState({
            hr:0,
            min:0,
            sec:0,
            mil:0
        })
    }
    stopWatch=()=>{
        if(this.mil<99){
          this.mil++;
        }
        else{
          this.mil=0;
          if(this.sec<59){
            this.sec++;
          }
          else{
            this.sec=0;
            if(this.min<59){
              this.min++;
            }
            else{
              this.min=0;
              if(this.hr<59){
                this.hr++;
              }
            }
          }
        }
        this.setState({
            hr:this.hr,
            min:this.min,
            sec:this.sec,
            mil:this.mil
        })
    }
    
  render() {
    return (
      <div>
        <h1 style={{backgroundColor:'green'}}>React Stopwatch</h1>
        <span style={{fontSize:'3rem'}}>{this.state.hr}:{this.state.min}:{this.state.sec}:{this.state.mil}</span>
        <br/>
        <button className='btn' onClick={this.start}>Start</button>
        <button className='btn' onClick={this.stop}>Stop</button>
        <button className='btn' onClick={this.reset}>Reset</button>
      </div>
    )
  }
  
}

export default Task4