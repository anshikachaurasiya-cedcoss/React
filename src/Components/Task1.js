import React, { useState } from 'react'

const Task1 = () => {
    const[data,setData]=useState([])
    const btnHandler=()=>[
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    ]
  return (
    <div className='task1_main_Div'>
        <button onClick={btnHandler}>Get Api</button>
        <table>
        {data.map((item)=>{
            return (
            <tr>
                <td>{JSON.stringify(item.id)}</td>
                <td>{JSON.stringify(item.name)}</td>
                <td>{JSON.stringify(item.username)}</td>
                <td>{JSON.stringify(item.email)}</td>
                <td>{JSON.stringify(item.phone)}</td>
                <td>{JSON.stringify(item.website)}</td>
            </tr>
            )
        })}
        </table>
    </div>
  )
}

export default Task1