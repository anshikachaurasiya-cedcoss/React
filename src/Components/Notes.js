import React from 'react'

const Notes = (props) => {
  return (
    <div className='list'>
      {props.arr.map((item,i)=>{
        return(
        <div className='item'>
          <button className='edit' onClick={props.edit} index={i}>Edit</button>
          <button className='delete' onClick={props.delete} index={i}>Delete</button>
          <p>{item.name}</p>
          <img src='https://m.media-amazon.com/images/I/81nia28xsOL._SL1500_.jpg' alt=''/>
          <label>{item.comments}</label>
        </div>
        )
      })}
    </div>
  )
}

export default Notes