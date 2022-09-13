import React from 'react'

const Footer = (props) => {
  return (
    <button className={props.dis} onClick={props.empty}>Empty Cart</button>
  )
}


export default Footer