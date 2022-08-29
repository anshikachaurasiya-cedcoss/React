import React, { Component } from 'react'

export class Task3 extends Component {
  interval;
    constructor(props) {
      super(props)
    
      this.state = {
        hr:0,min:0,sec:0
      }
    }
    startTimer=()=>{
      clearInterval(this.interval)
      this.hr=new Date().getHours();
      this.min=new Date().getMinutes();
      this.sec=new Date().getSeconds();
      this.interval = setInterval(this.start,1000)
    }
    start=()=>{
      if(this.sec>=1){
        this.sec--;
      }
      else{
        this.sec=59;
        if(this.min>=1){
          this.min--;
        }
        else{
          this.min=59;
          if(this.hr>1){
            this.hr--;
          }
          else{
            this.hr=0;
          }
        }
      }
      this.setState({
            hr:this.hr,
            min:this.min,
            sec:this.sec
        })
    }
  render() {
    return (
      <div>
        <h1>React Countdown Timer</h1>
        <span style={{fontSize:'3rem'}}>{this.state.hr}:{this.state.min}:{this.state.sec}</span>
        <br/>
        <button onClick={this.startTimer}>Start</button>
      </div>
    )
  }
  
}

export default Task3