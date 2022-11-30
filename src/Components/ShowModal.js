import React from 'react'

const ShowModal = (props) => {
  return (
    <>
    <h2>React Modal</h2>
    <table>
        <tr><th>Title</th><td>{props.state.obj.title}</td></tr>
        <tr><th>Description</th><td>{props.state.obj.description}</td></tr>
        <tr><th>Time</th><td>{props.state.obj.time}</td></tr>
        <tr><th>CheckBox Value</th><td>{props.state.obj.check}</td></tr>
        <tr><th>Radio selected value</th><td>{props.state.obj.radio}</td></tr>
    </table>
    <br/>
    <button onClick={props.close}>Close</button>
    </>
  )
}

export default ShowModal