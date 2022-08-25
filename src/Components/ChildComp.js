import React from 'react'

export default function ChildComp(props) {
  return (
    <div>
        <h2>{eval(props.num1 + props.operator + props.num2)}</h2>
    </div>
  )
}
