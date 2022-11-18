import React from 'react'
import propTypes from 'prop-types'

const Compc = (props) => {
  return (
    <div>{props.name}<br/>
    {props.total}<br/>
    {props.Marks}</div>
  )
}

Compc.propTypes={
  name:propTypes.string.isRequired,
  total:propTypes.number,
  Marks:propTypes.number
}

export default Compc