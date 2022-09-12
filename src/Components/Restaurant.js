import React from 'react'

const Restaurant = (props) => {
  return (
    <div className='items'>
        <div className='list'>
            {props.match.map((records,i)=>{
                return <div className='item'><img alt='' src={records.photograph}/>
                <div className='itemDetails'>
                  <p id='pName'>{records.name}</p>
                  <p id='pCuisine'>{records.cuisine_type}</p>
                  <p id='pPlace'>{records.neighborhood}</p>
                  </div>
                </div>
            })}
        </div>
    </div>
  )
}
 
export default Restaurant












