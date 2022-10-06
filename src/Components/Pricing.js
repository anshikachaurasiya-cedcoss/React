import React from 'react'
import Navbar from './Navbar'

const Pricing = (props) => {
  return (
    <>
    <Navbar login={props.login}/>
    <div className='main_hr_Div'>
    <div className='main_hr_div_left' style={{margin:'5%'}}>
        <p style={{fontSize:'1.5rem',fontWeight:'500'}}>HRMS Software</p>
        <label style={{fontSize:'2.7rem',fontWeight:'400',color:'orange'}}>HR Made Simple</label>
        <p style={{lineHeight:'1.5em'}}>Bring simplicity, speed and efficiency to all repetitive HRMS functions.<br/>
         Deliver world-class employee experience. Get operational HR out of the way,<br/>
          and make time for high value work.</p>
    </div>
    <div className='main_payroll_div'>
      <img src='https://www.greythr.com/static/8dbb46cdec41bfb92b4140b6648e4e34/65c2d/bannerImg.webp' alt=''/>
    </div>
    </div>
    </>
  )
}

export default Pricing