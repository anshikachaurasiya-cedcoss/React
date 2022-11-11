import React from 'react'

const AxiosPost = (props) => {
  return (
    <>
    <h1>Perform a Post request Using axios</h1>
    <form id='form' onSubmit={props.submitAxiosHandler}>
        <input placeholder='Title...' ref={props.axiosPostTitleInp}/>
        <input placeholder='Content...' ref={props.axiosPostContentInp}/>
        <button>Send</button>
    </form>
    {props.axiosPostArr.length!==0?
    <table id='get'>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
        </tr>
        <tr>
            <td>{props.axiosPostArr.id}</td>
            <td>{props.axiosPostArr.axiosTitle}</td>
            <td>{props.axiosPostArr.axiosContent}</td>
        </tr>
    </table>
    :<p></p>}
    </>
  )
}

export default AxiosPost