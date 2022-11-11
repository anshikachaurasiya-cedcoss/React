import React from 'react'

const PostPage = (props) => {
  return (
    <>
    <h1>Perform a POST request to add a post.</h1>
    <form id='form' onSubmit={props.submitHandler}>
        <input placeholder='Title...' ref={props.titleInp}/>
        <input placeholder='Content...' ref={props.contentInp}/>
        <button>Send</button>
    </form>
    {props.postArr.length!==0?
    <table id='get'>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
        </tr>
        <tr>
            <td>{props.postArr.id}</td>
            <td>{props.postArr.title}</td>
            <td>{props.postArr.content}</td>
        </tr>
    </table>
    :<p></p>}
    </>
  )
}

export default PostPage