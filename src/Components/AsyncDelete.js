import React from 'react'

const AsyncDelete = (props) => {
  return (
    <>
    <h1>perform a Delete request using async await</h1>
    <button className='delete' onClick={props.deleteAsyncHandler}>Delete</button>
    </>
  )
}

export default AsyncDelete