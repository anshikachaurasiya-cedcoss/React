import React, { useRef, useState } from 'react'

const Task2 = () => {
    const[data,setData]=useState({})
    var inpVal=useRef('')

    const btnHandler=()=>{
        fetch('https://api.github.com/users/'+inpVal.current.value)
        .then(res=>res.json())
        .then(data=> {
            setData(data)
        })        
    }
    
  return (
    <div className='task2_main_div'>
        <input ref={inpVal} />
        <button onClick={btnHandler}>Get Api</button>
        <table>
        {Object.keys(data).map((item)=>{
            return (
            <tr>
                <td>{item}</td>
                <td>{data[item]}</td>
            </tr>)
        })}
        </table>
    </div>
  )
}

export default Task2