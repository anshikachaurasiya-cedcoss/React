import React, { Component } from 'react'
import EmiTable from './EmiTable'

export class EmiBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount:'',
      interest:'',
      month:'',
      year:'',
      emi:'',
      table:'',
      totalInterest:'',
      totalPayment:'',
      num:'0',
      display:'css1'
    }
  }
  amountInp=(event)=>{
    this.amount = event.target.value
    this.setState({
      amount:this.amount
    })
  }
  interestInp=(event)=>{
    this.interest = event.target.value
    this.setState({
      interest:this.interest
    })
  }
  yearInp=(event)=>{
    this.year = event.target.value
      this.setState({
        year:this.year
      })
  }
  monthInp=(event)=>{
    this.month = event.target.value
    this.setState({
      month:this.month
    })
  }
  calculate=()=>{
    if(this.state.amount!=="" && this.state.interest!=="" && this.state.month!=="" && this.state.year!==""){
      this.rate = (this.state.interest/100)/12
    let month = (this.state.year*12)+parseInt(this.state.month)
    this.time = Math.pow((1+this.rate),month)
    this.state.emi = (this.state.amount*this.rate*this.time)/(this.time-1)
    this.setState({
      emi:this.state.emi
    })
    }
    else{
      alert("All input field must be filled")
    }
  }
  reset=()=>{
    this.setState({
      emi:"",
    })
    this.setState({
      amount:''
    })
    this.setState({
      interest:''
    })
    this.setState({
      month:''
    })
    this.setState({
      year:''
    })
    this.state.display='css1'
    this.setState({
      display:this.state.display
    })
  }
  details=()=>{
    if(this.state.emi!==""){
      this.state.display='css2'
      this.setState({
        display:this.state.display
      })
      this.state.num='1'
      this.setState({num:this.state.num})
      let month = (this.state.year*12)+parseInt(this.state.month)
      this.state.table=this.state.emi
      this.state.totalPayment = this.state.emi* month
      this.state.totalInterest = this.state.totalPayment-this.state.amount
      this.setState({
        table:this.state.table
      })
      this.setState({
        totalPayment:this.state.totalPayment
      })
      this.setState({
        totalInterest:this.state.totalInterest
      })
    }
  }
  render() {
    return (
    <div id='emiBody'>
      <form>
        <label>Loan Amount</label>
        <input name='amount' type='number' onChange={this.amountInp} value={this.state.amount}/>
        <label>Interest %</label>
        <input name='interest' type='number' onChange={this.interestInp} value={this.state.interest}/>
        <label style={{margin:'5%'}}>Period</label>
        <input style={{width:'15%'}} name='year' type='number' onChange={this.yearInp} value={this.state.year}/>
        <input style={{width:'15%'}} name='month' type='number' onChange={this.monthInp} value={this.state.month}/><br/>
        <label>EMI</label>
        <input name='emi' value={this.state.emi}/>
      </form>
      <div>
        <button onClick={this.calculate}>CALCULATE</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.details}>DETAILS</button>
      </div>
      <EmiTable display={this.state.display} table={this.state.table} totalInterest={this.state.totalInterest}  totalPayment={this.state.totalPayment} num={this.state.num} />
      </div>
    )
  }
}

export default EmiBody