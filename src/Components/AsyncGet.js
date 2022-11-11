import React from 'react'

const AsyncGet = (props) => {
  return (
  <>
  <h1>perform a Get request using async await</h1>
  <table id='getAsync'>
    <tr>
        <th>Title</th>
        <th>Content</th>
    </tr>
    {props.asyncGetArr.map((item)=>{
        return(
        <tr>
            <td>{item.title}</td>
            <td>{item.body}</td>
        </tr>
        )
    })}
  </table>
  </>
  )
}

export default AsyncGet