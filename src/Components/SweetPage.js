import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SweetPage = (props) => {
    var inpVal= createRef()
    var [val,setVal]=useState('0')
    var[total,setTotal]=useState('0')
    const plusHandler=()=>{
        var valInp = inpVal.current.value
        val = parseInt(valInp)+parseInt(1)
        setVal(val)
        console.log(props.arr[0].price)
        total = val*props.arr[0].price
        setTotal(total)
    }
    const minusHandler=()=>{
        if(inpVal.current.value>0){
            var valInp = inpVal.current.value
            val = parseInt(valInp)-parseInt(1)
        }
        setVal(val)
    }
    return (
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
            <Link to='/login'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='cartIcon'>
            <i class="fa fa-heart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            <i class="fa fa-shopping-cart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            </div>
        </div>
        <div id='sweetImg'>
            <img src={props.arr[0].image} alt=''/>
            <div id='sweetContent'>
                <span>{props.arr[0].name}</span>
                <span>{props.arr[0].price}</span>
                <p>lorem lorem Taking her title from his intriguing handwritten note, her installation Rules for fighting (Reglas para pelear), based on her eponymous book, is a powerful piece on mourning and resuming a daughterly relationship that has been abruptly interrupted.</p>
                <div id='sweetBtn'>
                    <div style={{height:'45px',backgroundColor:'white',borderRadius:'2px',width:'30%'}}>
                        <button onClick={minusHandler} style={{width:'27%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'white'}}>-</button>
                        <input style={{width:'30%',height:'35px',textAlign:'center',fontSize:'1.3rem',border:'none'}} ref={inpVal} value={val} />
                        <button onClick={plusHandler} style={{width:'27%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'white'}}>+</button>
                    </div>
                    <span>Total = {total}</span>
                </div>
                <button id='cart'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default SweetPage