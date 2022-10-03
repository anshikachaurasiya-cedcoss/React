import React from 'react'

const Body4 = (props) => {
  return (
    <div className='main_body4_div'>
        <div className='small_div_body4'></div>
        <label>Exceptional Support</label>
        <div className='body4_lower_div'>
            {props.array2.map((item)=>{
                return(
                <div className='body4_lower_innerdiv'>
                    <img src={item.img} alt=''/>
                    <p>{item.heading}</p>
                    <label style={{padding:'2%',lineHeight:'1.7em'}}>{item.content}</label>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Body4