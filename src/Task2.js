import React, { useState } from 'react'

const Task2 = () => {
    const [string,setString]=useState('')
    let txt=''
    const textHandler=(event)=>{
        txt = event.target.value
    }
    const clickHandler=()=>{
        setString(txt.toUpperCase())
    }
  return (
    <div id='Task2'>
        <h2>Task2</h2>
        <h5>Q2. Create a Text area and convert the text into uppercase using button</h5>
        <form>
            <textarea rows='3' columns='20' onChange={textHandler} placeholder='Enter text'></textarea><br/>
            <button onClick={clickHandler}>Click Me</button><br/>
            <label>{string}</label>
        </form>
    </div>
  )
}

export default Task2