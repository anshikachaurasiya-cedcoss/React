import React from 'react'

const Body = () => {
  return (
    <div className='container'>
        <div id='containerLeft'>
            <span id='span1'>Get Started with<br/>
            Apptio Today</span>
            <p style={{color:'white'}}>
              Talk to an Apptio expert about your <br/>
              specific needs and see a live product<br/>
              demonstration. Discuss current<br/>
              challenges and find the right<br/>
              application for your use case.
            </p>
        </div>
        <div id='containerRight'>
          <div className='div1'>
            <div><span>First Name</span></div>
            <div><span>Last Name</span></div>
          </div>
          <div className='div1'>
            <div><span>Work Email</span></div>
            <div><span>Phone</span></div>
          </div>
          <div className='div1'>
            <div><span>Company</span></div>
            <div><span>Job Function</span></div>
          </div>
          <div className='div2'><span>Country</span></div>
          <div className='div3'><span>How Can We Help?</span></div>
          <button id='startBtn'>Get Started</button>
        </div>
        <div id='containerLast'>
            <div style={{height:'10%',width:'40%',backgroundColor:'blue',alignItems:'center',display:'flex',justifyContent:'center'}}><i class="fa fa-comment-o"></i></div>
            <div style={{height:'10%',width:'40%',backgroundColor:'orangered',alignItems:'center',display:'flex',justifyContent:'center'}}><i class='fas fa-desktop'></i></div>
        </div>
    </div>
  )
}

export default Body