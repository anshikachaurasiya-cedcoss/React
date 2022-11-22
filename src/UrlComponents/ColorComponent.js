
import React from 'react'
import HOC2 from '../HOC2'
import TableComponent from '../TableComponent'

const ColorComponent = ({urL,btn2Handler}) => {
  return (
  <div>
    <button onClick={btn2Handler}>Get Color</button>
    <TableComponent urL={urL}/>
  </div>
  )
}

const ColorComp=HOC2(ColorComponent,'https://dummyjson.com/users/filter?key=hair.color&value=Black')

export default ColorComp