import React, { Component } from 'react'

export class BmiCalculator extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            weight:'', height:'', getWeight:'', getHeight:'', calBmi:'', p1:'', p2:'',p3:'',message:''
        }
    }
    weightSelect=(event)=>{
        this.setState({
            weight:event.currentTarget.value
        },()=>{
            if(this.state.weight==='Kilograms'){
               return this.setState({p1:'Weight in kg'})
            }
            if(this.state.weight==='Pounds'){
                return this.setState({p1:'Weight in lb'})
             }
        })
    }
    heightSelect=(event)=>{
        this.setState({
            height:event.currentTarget.value
        },()=>{
            if(this.state.height==='Meters'){
               return this.setState({p2:'Height in m'})
            }
            if(this.state.height==='Inches'){
                return this.setState({p2:'Height in inches'})
            }
        })
    }
    weightInp=(event)=>{
        this.setState({
            getWeight:event.target.value
        })
    }
    heightInp=(event)=>{
        this.setState({
            getHeight:event.target.value
        })
    }
    calculate=()=>{
        if(this.state.getWeight==='' && this.state.getHeight==='')
        {
            return this.setState({p3:'Enter Values'})
        }
        else
        {
            if(this.state.weight==='Kilograms' && this.state.height==='Meters')
            {
                this.state.calBmi = this.state.getWeight/Math.pow(this.state.getHeight,2)
                if(this.state.calBmi<18.5)
                {
                    this.setState({message:'Underweight'})
                }
                else if(this.state.calBmi>=18.5 && this.state.calBmi<24.9)
                {
                    this.setState({message:'Healthy Weight'})
                }
                else if(this.state.calBmi>=24.9 && this.state.calBmi<29.9)
                {
                    this.setState({message:'Overweight'})
                }
                else
                {
                    this.setState({message:'Obesity'})
                }
                this.setState({p3:''})
                this.setState({
                    calBmi:this.state.calBmi
                })
            }
            else if(this.state.weight==='Pounds' && this.state.height==='Inches')
            {
                this.state.calBmi = (this.state.getWeight/Math.pow(this.state.getHeight,2))*703
                if(this.state.calBmi<18.5)
                {
                    this.setState({message:'Underweight'})
                }
                else if(this.state.calBmi>=18.5 && this.state.calBmi<24.9)
                {
                    this.setState({message:'Healthy Weight'})
                }
                else if(this.state.calBmi>=24.9 && this.state.calBmi<29.9)
                {
                    this.setState({message:'Overweight'})
                }
                else
                {
                    this.setState({message:'Obesity'})
                }
                this.setState({p3:''})
                this.setState({
                    calBmi:this.state.calBmi
                })
            }
            else
            {
                this.setState({p3:'Select Correct Unit Combination either kg/m or pounds/inches'})
                this.setState({
                    calBmi:''
                })
                this.setState({message:''})
            }
        }
    }
    render() {
        return (
        <div id='calculator'>
            <div id='selectDiv'>
                <select onChange={this.weightSelect}>
                    <option>Weight</option>
                    <option>Kilograms</option>
                    <option>Pounds</option>
                </select>
                <select onChange={this.heightSelect}>
                    <option>Height</option>
                    <option>Meters</option>
                    <option>Inches</option>
                </select>
            </div>
            <div className='ff'>
                <span>Enter Weight</span>
                <input type='text' onChange={this.weightInp} value={this.state.getWeight} index='0'/>
                <p style={{color:'red',fontSize:'0.9rem'}}>{this.state.p1}</p>
            </div>
            <div className='ff'>
                <span>Enter Height</span>
                <input type='text' onChange={this.heightInp} value={this.state.getHeight}/>
                <p style={{color:'red',fontSize:'0.9rem'}}>{this.state.p2}</p>
            </div>
            <button onClick={this.calculate}>Calculate</button>
            <p style={{fontSize:'1.3rem',color:'red'}}>{this.state.p3}</p>
            <p style={{fontSize:'1.1rem',color:'green'}}>{this.state.message}</p>
            <p style={{fontSize:'1.1rem',color:'black'}}>{this.state.calBmi}</p>
        </div>
        )
    }
}

export default BmiCalculator