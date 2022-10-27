import React from 'react'

const Card = (props) => {
  return (
    <div className='card' index={props.index} onClick={props.clickHandler}>
        <img src={props.item.img} alt='' />
    </div>
  )
}

export default Card