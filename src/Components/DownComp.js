import React from 'react'
import NameComp from './NameComp'
export default function DownComp(props) {
  return (
    <div>
        <NameComp username={props.username}/>
    </div>
  )
}
