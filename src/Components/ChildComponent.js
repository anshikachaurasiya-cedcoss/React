import React from 'react'

function ChildComponent({name}) {
    console.log("////// child component//////")
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo( ChildComponent )