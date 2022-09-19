import React, { useState } from 'react'
import SweetPage from './SweetPage'

const Body = (props) => {
  var ind =''
  var[arrInd,setArrInd]=useState([])
  var[flg,setFlg]=useState(true)
  const divHandler=(e)=>{
    ind = e.target.parentElement.getAttribute('ind')
    arrInd.push(props.sweets[ind])
    setArrInd([...arrInd])
    flg=false
    setFlg(flg)
  }
  
  if(flg){
    return(
    <div className='items'>
      <div className='list'>
        {props.match.map((records,i)=>{
          return (<div className='item' ind={i} onClick={divHandler}>
              <img alt='' src={records.image}/>
              <div className='itemDetails'>
                <p id='pName'>{records.name}</p>
                <p id='pCuisine'>{records.price}</p>
                <p id='pPlace' style={{color:'yellow'}}>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </p>
              </div>
            </div>
          )
         
        })}
      </div>
    </div>
    )
  }
  else
  {
    return(  
      <SweetPage arr={arrInd}/>
    )
  }
}


export default Body