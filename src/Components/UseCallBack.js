import React, { useCallback, useState } from 'react'
import CompAUseCallback from './CompAUseCallback'
import CompBUseCallback from './CompBUseCallback'
import CompCUseCallback from './CompCUseCallback'

const UseCallBack = () => {
  var [inp1Val,setInp1Val]=useState('')
  var [inp2Val,setInp2Val]=useState('')

  // onchangeHandler for input 1

  const inp1 = useCallback((e)=>{
    setInp1Val(e.target.value)
  },[inp1Val])

  // onchangeHandler for input 2

  const inp2=useCallback((e)=>{
    setInp2Val(e.target.value)
  },[inp2Val])

  return (
    <div>
      <CompAUseCallback inp1={inp1}/>
      <CompBUseCallback inp2={inp2} inp1Val={inp1Val}/>
      <CompCUseCallback inp2={inp2} inp2Val={inp2Val}/>
    </div>
  )
}

export default UseCallBack