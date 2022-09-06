import React, { useState } from 'react'
var h1='',h2='',h3='',arr=[]

const Task5 = () => {
    const[values,setValues]=useState('')
    const inputH1=(event)=>{
        h1=event.target.value
        arr.push(h1)
    }
    const inputH2=(event)=>{
        h2=event.target.value
        arr.push(h2)
    }
    const inputH3=(event)=>{
        h3=event.target.value
        arr.push(h3)
    }
    const btnHandler=()=>{
        setValues(arr)
    }
  return (
    <div id='Task5'>
        <h2>Task5</h2>
        <h5>Q5. Make 3 Checkboxes of Hobbies on submit print only selected hobbies</h5>
        <input type='checkbox' onClick={inputH1} value='Badminton'/>
        <input type='checkbox' onClick={inputH2} value='Painting'/>
        <input type='checkbox' onClick={inputH3} value='Teaching'/>
        <button onClick={btnHandler}>Click Me</button>
        <p>{values}</p>
    </div>
  )
}

export default Task5