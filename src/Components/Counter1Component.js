import React from 'react'
import HOC from '../HOC'

const Counter1Component = ({value,btnHandler}) => {
  return (
    <div>
        <h3>{value}</h3>
        <button onClick={btnHandler}>Click me</button>
    </div>
  )
}

const Count1Comp=HOC(Counter1Component,5)

export default Count1Comp