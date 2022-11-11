import React from 'react'

const AsyncPost = (props) => {
  return (
    <>
    <h1>perform a post request using async await</h1>
     <form id='form' onSubmit={props.submitAsyncHandler}>
        <input placeholder='Title...' ref={props.asyncPostTitleInp}/>
        <input placeholder='Content...' ref={props.asyncPostContentInp}/>
        <button type='submit'>Send</button>
    </form>
    {props.asyncPostArr.length!==0?
    <table id='get'>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
        </tr>
        <tr>
            <td>{props.asyncPostArr.id}</td>
            <td>{props.asyncPostArr.asyncTitle}</td>
            <td>{props.asyncPostArr.asyncContent}</td>
        </tr>
    </table>
    :<p></p>}
    </>
  )
}

export default AsyncPost