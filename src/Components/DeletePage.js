import React from 'react'

const DeletePage = (props) => {
  return (
    <>
    <h1>Perform a DELETE request to delete a post.</h1>
    <button className='delete' onClick={props.deleteHandler}>Delete</button>
    </>
  )
}

export default DeletePage