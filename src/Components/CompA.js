import React from 'react'
import propTypes from 'prop-types'

const CompA = (props) => {
  return (
    <>
    <h3>Pass your name as prop from one functional component to another and fix its proptype to string</h3>
    <div>{props.name}</div>
    </>
  )
}
CompA.propTypes={
  name:propTypes.string
}
export default CompA