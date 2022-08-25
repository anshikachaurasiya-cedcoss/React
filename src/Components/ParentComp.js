import React from 'react'
import ChildComp from './ChildComp'
export default function ParentComp() {
  return (
    <div>
        <ChildComp num1='83' num2='67' operator='*'/>
    </div>
  )
}
