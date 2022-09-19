import React from 'react'
import RestaurantDetails from './RestaurantDetails'

function Site() {
  return (
    <div id='container'>
        <div id='header'>
            <div id='imgDiv'>
            <i className='fas fa-hamburger' style={{fontSize:'48px',color:'red'}}></i>&nbsp;
            <p style={{color:'white'}}>Yum Food</p>
            </div>
            <div id='nav'>
                <p>Hello, User</p><p>About Us</p><p>Contact Us</p><p>Reviews</p>
            </div>
        </div>
        <RestaurantDetails/>
    </div>
  )
}

export default Site













