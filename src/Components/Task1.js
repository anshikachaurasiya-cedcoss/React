import React, { useState } from 'react'

const Task1 = () => {
    var[count,setCount]=useState(0)
    const counter=(e)=>{
        var val = e.target.getAttribute('value')
        setCount(parseInt(val)+parseInt(1))
    }
  return (
    <div id='task1'>
        <button onClick={counter} value={count}>No. of Clicks ={count}</button>
    </div>
  )
}

export default Task1