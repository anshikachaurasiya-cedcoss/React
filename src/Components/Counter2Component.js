import React from 'react'
import HOC from '../HOC'

const Counter2Component = ({value,btnHandler}) => {
  return (
    <div>
        <h3>{value}</h3>
        <button onClick={btnHandler}>Click me</button>
    </div>
  )
}

const Count2Comp=HOC(Counter2Component,10)


export default Count2Comp