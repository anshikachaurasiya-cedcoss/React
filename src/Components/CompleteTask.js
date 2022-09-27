import React from 'react'

const CompleteTask = (props) => {
  return (
    <div>
            <h3>Completed</h3>
            <ul id='completed-tasks'>
                {props.completeArr.map((data,x)=>
                <li>
                    <input type="checkbox" index={x} status="Complete" onChange={props.check} checked/>
                    <label>{data}</label>
                    <input type="text" />
                    <button value={data} index={x} status="Complete" onClick={props.edit}>Edit</button>
                    <button index={x} status="Complete" onClick={props.del}>Delete</button>
                    </li>)}
            </ul>
        </div>
  )
}

export default CompleteTask