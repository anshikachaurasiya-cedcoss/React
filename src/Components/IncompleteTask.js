import React from 'react'
import CompleteTask from './CompleteTask'

const IncompleteTask = (props) => {
  return (
    <>
    <div>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
            {props.incompleteArr.map((data,x)=>
            <li>
                <input type="checkbox" status="Incomplete" index={x} onChange={props.check}/>
                <label>{data}</label>
                <input type="text" />
                <button value={data} index={x} status="Incomplete" onClick={props.edit}>Edit</button>
                <button index={x} status="Incomplete" onClick={props.del}>Delete</button></li>)}
        </ul>
    </div>
    <CompleteTask completeArr={props.completeArr} del={props.del} check={props.check} edit={props.edit}/>
    </>
  )
}

export default IncompleteTask