import React, { useState } from 'react'

const Task2 = () => {
    var[count,setCount]=useState(0)
    const increment=(e)=>{
        var val = e.target.getAttribute('value')
        setCount(parseInt(val)+parseInt(1))
    }
    const decrement=(e)=>{
        var val = e.target.getAttribute('value')
        if(val==0){
            return
        }
        else{
            setCount(parseInt(count)-parseInt(1))
        }        
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div id='task2'>
        <div id='counter'>
            <h2>{count}</h2><br/>
            <button onClick={decrement} value={count}>-</button>
            <button onClick={reset} value={count} >Reset</button>
            <button onClick={increment} value={count}>+</button>
        </div>
        
    </div>
  )
}

export default Task2