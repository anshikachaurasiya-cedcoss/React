import React, { createRef, useState } from 'react'
import { CurrencyContext } from '../App'

const Task5B = () => {
    const amountInp = createRef()
    var sel1='',fromVal='',sel2='',toVal='',ans='',inp=''
    const[from,setFrom]=useState('')
    const[selFrom,setSelFrom]=useState('')
    const[to,setTo]=useState('')
    const[selTo,setSelTo]=useState('')
    const[answer,setAns]=useState('')
    const[inpVal,setInp]=useState('')
    const sel1Handler=(e)=>{
        sel1 = e.target.value
        var ind = e.target.selectedIndex
        var option = e.target.childNodes[ind]
        var val = option.getAttribute('val')
        fromVal = val
        setFrom(fromVal)
        setSelFrom(sel1)
    }
    const sel2Handler=(e)=>{
        sel2 = e.target.value
        var ind = e.target.selectedIndex
        var option = e.target.childNodes[ind]
        var val = option.getAttribute('val')
        toVal = val
        setTo(toVal)
        setSelTo(sel2)
    }
    const btnHandler=()=>{
        inp = amountInp.current.value
        ans = ((to/from)*inp)
        ans = ans.toFixed(2)
        setAns(ans)
        setInp(inp)
    }

    return (
    <div id='container'>
        <div id='converter'>
            <h3>Currency Converter</h3>
            <div className='labelDiv'>
                <label>Enter Amount</label><input type='number' ref={amountInp}/>
            </div>
            <div className='labelDiv2'>
                <div className='leftDiv'>
                    <label>From</label>
                    <div className='iconDiv'>
                        <CurrencyContext.Consumer>
                            { currency=>{
                                return(
                                    <select onChange={sel1Handler}>
                                        <option>Select</option>
                                        {Object.keys(currency).map((k,i)=>{
                                            return <option val={currency[k]}>{k}</option>
                                        })}
                                    </select>
                                )
                            }}
                        </CurrencyContext.Consumer>
                    </div>
                </div>
                <div>
                <i class="fa fa-long-arrow-left"></i>
                <i class="fa fa-long-arrow-right"></i>
                </div>
                <div className='rightDiv'>
                <label>To</label>
                    <div className='iconDiv'>
                    <CurrencyContext.Consumer>
                            { currency=>{
                                return(
                                    <select onChange={sel2Handler}>
                                        <option>Select</option>
                                        {Object.keys(currency).map((k,i)=>{
                                            return <option val={currency[k]}>{k}</option>
                                        })}
                                    </select>
                                )
                            }}
                        </CurrencyContext.Consumer>
                    </div>
                </div>
            </div>
            <span>{selFrom}{inpVal}={answer}{selTo}</span>
            <button onClick={btnHandler}>Get Exchange rate</button>
        </div>
    </div>
  )
}

export default Task5B