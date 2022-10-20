import React from 'react'

const Clock = (props) => {
  return (
    <div>
        <h1>Digital Clock</h1>
        <select onChange={props.select}>
            {props.countries.map((item,i)=>{
                return(
                    <option index={i}>{item[0]}</option>
                )
            })}
        </select>
        <h2>{props.time}</h2>
    </div>
  )
}

export default Clock