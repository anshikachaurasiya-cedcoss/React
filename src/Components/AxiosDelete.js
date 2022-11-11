import React from 'react'

const AxiosDelete = (props) => {
  return (
    <>
    <h1>Perform a DELETE request using Axios.</h1>
    <button className='delete' onClick={props.deleteAxiosHandler}>Delete</button>
    </>
  )
}

export default AxiosDelete