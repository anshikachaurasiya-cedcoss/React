import React, { useState } from 'react'
import AboutRestaurant from './AboutRestaurant'

let newArr ={}
const Restaurant = (props) => {
  var[arr,setArr]=useState(newArr)
  var[flg,setFlg]=useState(true)
  var[id,setId]=useState()
  const divHandler=(e)=>{
    setFlg(true)
    newArr={}
    var ind = e.target.parentElement.getAttribute('ind')
    newArr=props.restaurants[ind-1]
    setArr({...newArr})
    setFlg(false)
  }
  const backHandler=()=>{
    setFlg(true)
    setId('items')
  }
  if(flg)
  {
    return (
    <div className='items'>
      <div className='list'>
        {props.match.map((records,i)=>{
          return <div className='item' ind={records.id} in onClick={divHandler}>
            <img alt='' src={records.photograph}/>
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
  else
  {
    return(
      <AboutRestaurant arr={arr} btn={backHandler}/>     
    )   
  }
}
 
export default Restaurant