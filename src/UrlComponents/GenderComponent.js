import React from 'react'
import HOC2 from '../HOC2'
import TableComponent from '../TableComponent'

const GenderComponent = ({urL,btn2Handler}) => {
  return (
    <div>
        <button onClick={btn2Handler}>Gender Component</button>
        <TableComponent urL={urL}/>
    </div>
  )
}

const GenderComp=HOC2(GenderComponent,'https://dummyjson.com/users/filter?key=gender&value=male')

export default GenderComp
