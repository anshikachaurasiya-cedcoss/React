import React from 'react'

const CompBUseCallback = (props) => {
  console.log("...CompB...")
  return (
    <div>
      <input placeholder='compB' onChange={props.inp2}/>
      <h1>{props.inp1Val}</h1>
    </div>
  )
}

export default React.memo(CompBUseCallback)