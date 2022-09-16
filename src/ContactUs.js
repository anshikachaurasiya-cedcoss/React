import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='main'>
    <div id='nav'>
        <div id='optionDiv'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
        <div id='iconDiv'>
            <i class='fas fa-user-circle' style={{fontSize:'24px'}}></i>
            <span>Sign in</span>|<span>Log in</span>
        </div>
        
    </div>
    <div id='contactContent'>
        <h2>Contact Us</h2>
        <div id='cContent'>
            <div className='contacts'>
            <i class='fas fa-phone' style={{fontSize:'36px',margin:'2%'}}></i>
            <br/>
            <span>+3263 76323</span>
            <br/><br/>
            <span>Gomti Nagar,233 as/dd21</span>
            <br></br>
            <span>Lucknow, UttarPradesh (226010)</span>
            <br/><br/><br/>
            <div>
            <i class="fa fa-facebook-f" style={{fontSize:"24px" ,margin:'2%'}}></i>
            <i class="fa fa-instagram" style={{fontSize:"24px",margin:'2%'}}></i>
            <i class="fa fa-twitter" style={{fontSize:"24px",margin:'2%'}}></i>
            <i class="fa fa-pinterest" style={{fontSize:"24px",margin:'2%'}} ></i>

            </div>
            </div>
            <div className='contacts'>
            <i class='fas fa-calendar-alt' style={{fontSize:'36px',margin:'2%'}}></i>
            <br/>
            <span>WeekDays</span>
            <br/>
            <span>7:00am - 11:00pm</span>
            <br/><br/>
            <span>Weekends</span>
            <br/>
            <span>9:00am - 12:00pm</span>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default ContactUs