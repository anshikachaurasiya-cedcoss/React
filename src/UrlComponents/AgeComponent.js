import React from 'react'
import HOC2 from '../HOC2'
import TableComponent from '../TableComponent'

const AgeComponent = ({urL,btn2Handler}) => {
    return (
    <div>
        <button onClick={btn2Handler}>Age Component</button>
        <TableComponent urL={urL}/>
    </div>
    )
}

const AgeComp=HOC2(AgeComponent,'https://dummyjson.com/users/filter?key=age&value=30')

export default AgeComp
