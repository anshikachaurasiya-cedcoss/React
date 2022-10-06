import React from 'react'

const Body = (props) => {
  return (
    <div className='main_body_div'>
        <div className='main_body1_div'>
            <div className='main_body1_div_left'>
                <h1 style={{fontSize:'2.6rem'}}>Essential HR Business Tools
                To Survive And Thrive</h1>
                <label>The greytHR Platform automates HR processes & empowers employee self-service.
                     Get all-around productivity and engaged employees—the crucial ingredients for growth.</label>
                <button className='main_body1_div_left_btn' onClick={props.free}>START FREE TRIAL</button>
            </div>
            <div className='main_body1_div_right'></div>
        </div>
    </div>
  )
}

export default Body