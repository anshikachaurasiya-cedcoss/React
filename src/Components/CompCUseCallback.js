import React from 'react'

const CompCUseCallback = (props) => {
  console.log("...CompC...")
  return (
  <div>
    {props.inp2Val}
  </div>
  )
}

export default React.memo(CompCUseCallback)