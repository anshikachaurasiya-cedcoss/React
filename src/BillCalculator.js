import React, { Component } from 'react'

export class BillCalculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        getval:'',
        calculate:''
      }
    }
    inputVal=(event)=>{
        this.state.getval = event.target.value
        this.setState({
            getval:this.state.getval
        })
    }
    calculate=()=>{
        if(this.state.getval>=0 && this.state.getval<=50){
            this.state.calculate=this.state.getval*3.5
        }
        else if(this.state.getval>50 && this.state.getval<=150){
            this.state.calculate = 175+((this.state.getval-50)*4)
        }
        else if(this.state.getval>150 && this.state.getval<=250){
            this.state.calculate = 575+((this.state.getval-150)*5.2)
        }
        else{
            this.state.calculate = 1095+((this.state.getval-250)*6.5)
        }
        this.setState({
            calculate:this.state.calculate
        })
    }
  render() {
    return (
      <div id='calculator'>
        <input type='text' placeholder='Enter Units' onChange={this.inputVal} value={this.state.getval}/>
        <button onClick={this.calculate}>Calculate</button>
        <p style={{backgroundColor:'black'}}>{this.state.calculate} units</p>
      </div>
    )
  }
}

export default BillCalculator