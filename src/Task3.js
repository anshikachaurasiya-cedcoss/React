import React, { useState } from 'react'

const Task3 = () => {
    const[arr,setArr]=useState('')
    var sel=''
    const sarr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturaday','Sunday']
    const selectHandler=(event)=>{
        sel = parseInt(event.target.value)
        setArr(sarr[sel-1])           
    }
  return (
  <div id='Task3'>
    <h2>Task3</h2>
    <h5>Q3. Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printed</h5>
    <form>
        <select onChange={selectHandler}>
            <option>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
        </select>
        <br/>
        <label>{arr}</label>
    </form>
    </div>
  )
}

export default Task3