import React, { Component } from 'react'
import NumbersComp from './NumbersComp'

export class Display extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        input:'',
      }
    }
    getVal=(event)=>{
        this.setState({
            input:event.target.value
        })
        this.val=event.target.getAttribute('value')
    }
    flagOp=0
    flagDec=0
    flagCalc=0
    handleClick=(e)=>{
        this.name = e.target.getAttribute('name')
        if(this.name==='+' || this.name==='-' || this.name ==='*' || this.name ==='/'){
            if(this.flagOp>0){
                return false;
            }
            this.flagOp++
            this.flagDec=0
        }
        else if( this.name ==='.'){
            if(this.flagDec>0){
                return false;
            }
            this.flagDec++
        }
        else{
           this.flagOp=0
        }
       if(this.flagCalc===0){
        this.state.input=this.state.input+this.name
       }
       else{
        this.state.input=this.name
        this.flagCalc=0
       }
        this.setState({
            input:this.state.input
        })
    }
    cancel=()=>{
        this.setState({
            input:""
        })
    }
    calculate=()=>{
        try{
            this.evaluate=eval(this.state.input).toString()
            this.setState({
                input:this.evaluate
            })
        }
        catch(err){
            this.setState({
                input:"error"
            })
        }
        this.flagCalc=1
    }
  render() {
    return (
        <div id="divCalculator">
        <div id="disInput">
            <button id="clearBtn" onClick={this.cancel}>C</button>
            <input id="inputDis" type="text" value={this.state.input} onChange={this.getVal}/>
        </div>
        <NumbersComp click={this.handleClick} calculate={this.calculate}/>
    </div>
    )
  }
}

export default Display