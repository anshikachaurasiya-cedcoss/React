import React from 'react'
import ParagraphDiv from './ParagraphDiv'
const ParaDiv=()=> {
  return (
    <div style={{height:300,width:800,backgroundColor:'whitesmoke',display:'flex',flexDirection:'row',margin:5}}>
        <ParagraphDiv/>
        <ParagraphDiv/>
        <ParagraphDiv/>
    </div>
  )
}

export default ParaDiv