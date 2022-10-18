import React from 'react'

const Create = (props) => {
  return (
    <div className='create_div'>
        <h3>Create Notes</h3>
        <div className='create_innerdiv'>
            <input placeholder='Enter Notes Topics here...' ref={props.titleInp}/>
            <textarea placeholder='Enter Notes Content here...' rows='6' columns='20' ref={props.contentInp}/>
        </div>       
        <button onClick={props.add}>{props.btn}</button>
    </div>
  )
}

export default Create