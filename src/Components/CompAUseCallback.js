import React from 'react'

const CompAUseCallback = (props) => {
  console.log("...CompA...")
  return (
    <div>
      <input placeholder='compA' onChange={props.inp1}/>
    </div>
  )
}

export default React.memo(CompAUseCallback)