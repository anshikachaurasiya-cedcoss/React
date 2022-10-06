import React from 'react'
import Navbar from './Navbar'
import ReCAPTCHA from 'react-google-recaptcha'


const Login = (props) => {
  return (
    <>
    <Navbar free={props.free}/>    
    <div className='main_login_div'>
        <h2 style={{fontWeight:'300',paddingTop:'3%'}}>Login to greytHR</h2>
        <label style={{paddingBottom:'3%'}}>Find out the greytHR URL for your company</label>
        <div className='main_login_form'>
            <label>Official Email or Phone Number:</label>
            <input type='text' ref={props.inpVal}/>
            <div className='captch_div'>
                <ReCAPTCHA ref={props.checkVal} sitekey=' 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                 secretkey=' 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'/>
                <button onClick={props.search}>Search</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login