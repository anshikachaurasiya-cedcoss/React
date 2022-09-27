import React  from 'react'
 
const Body = (props) => {
  
  return(
    <div className='items'>
      <div className='list'>
        {props.match.map((records,i)=>{
          return (
          <div className='item' ind={records.id} onClick={()=>props.div(records.id)}>
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

export default Body