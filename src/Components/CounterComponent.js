import React from 'react'
import HOC from '../HOC'

const CounterComponent = ({value,btnHandler}) => {
  return (
    <div>
        <h3>{value}</h3>
        <button onClick={btnHandler}>Click me</button>
    </div>
  )
}

const CountComp=HOC(CounterComponent,2)

export default CountComp