import React, { useState } from 'react'

const Task1 = () => {
    const[integer,setInteger]=useState('')
    let inp=''
    const inputHandler=(event)=>{
        inp = event.target.value
    }
    const clickHandler=()=>{
        setInteger(inp)
    }
  return (
    <div id='Task1'>
        <h2>Task1</h2>
        <h5>Q1. Create a text box that accepts only numbers and display the same using buttons</h5>
        <form>
            <input type='numbers' placeholder='Enter a number' onChange={inputHandler}/>
            <button onClick={clickHandler}>Click me</button><br/>
            <label>{integer}</label>
        </form>
    </div>
  )
}

export default Task1