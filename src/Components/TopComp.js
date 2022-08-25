import React from 'react'
import DownComp from './DownComp'
export default function TopComp(props) {
  return (
    <div>
        <DownComp username={props.username}/>
    </div>
  )
}
