import React from 'react'

function CardComponent(props) {
  return (
    <div id='mainDiv' style={{backgroundColor:props.color}}>
        <div id='head' style={{borderBottom:props.border}}>Header</div>
        <span>{props.spanpara}</span>
        <p>Some Quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  )
}

export default CardComponent