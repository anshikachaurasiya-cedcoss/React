import React from 'react'

const Home = () => {
  return (
    <div id='web'>
    <div id='bodyDiv'>
        <div id='divLeft'>
            <h1>Make up to $35/hr<br/>Driving Your Car</h1>
        </div>
        <div id='divRight'>
            <div id='form'>
                <h3>Apply Now</h3>
                <label>Enter your info, and then download<br/>
                the Lyft</label>
                <input placeholder='First name'/>
                <input placeholder='Last name'/>
                <input placeholder='Email address'/>
                <input placeholder='City'/>
                <input placeholder='Phone Number'/>
                <input placeholder='Promo Code (optional)'/>
                <div id='check'>
                    <input type='checkbox'/><span>I agree to the Lyft items</span>
                </div>
                <button>BECOME A DRIVER</button>
                <p>Already applied? <span>Check the status of your<br/>
                application here</span></p>
            </div>
        </div>
    </div>
    <div id='footer'>
        <h2>See How Much You Can Make</h2>
        <span>How many hours do you want to drive this week?</span>
        <div id='btn'>
            <input placeholder='Hours'/>
            <input placeholder='City'/>
            <button>CALCULATE</button>
        </div>
    </div>
    </div>
  )
}

export default Home