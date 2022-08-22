import React, { Component } from 'react'
import Component2 from './Component2'
export class Component1 extends Component {
  render() {
    const mainDiv={
        height:600,
        width:'auto',
        display:'flex',
        flexDirection:'column'
    }
    return (
      <div id='mainDiv' style={mainDiv}>
        <div id='header'>
            <div id='imgDiv'>
                <img className='imgspotify' src='https://w0.peakpx.com/wallpaper/601/350/HD-wallpaper-spotify-black-white.jpg'/>
                <p style={{color:'white'}}>Spotify</p>
            </div>
            <div id='nav'>
                <p>Premium</p><p>Support</p><p>Download</p><p>|</p><p>Sign Up</p><p>Log In</p>
            </div>
        </div>

        <div id='middle'>
            <h1 style={{color:'white'}}>Get Premium free for 1 month</h1>
            <p style={{color:'white'}}>Just ₹199/month after. Debit and Credit cards accepted. Cancel anytime.</p>
            <div id='btn'>
                <button id='strt'>GET STARTED</button>
                <button id='plan'>SEE OTHER PLANS</button>
            </div>
            <div id='link'>
                <p style={{textDecoration:'underline'}}>Terms and conditions apply.</p>
                <p>1 month free not availabke for users who have already tried Premium.</p>
            <p></p>
            </div>
        </div>

        <div id='footer'>
            <h1>Introducing Premium Mini</h1>
            <p style={{margin:0}}>₹7 for 1 day.</p>
            <p>₹25 for 1 week.</p>
            <button style={{borderRadius:20,border:'none',height:30,width:100}}>GET MINI</button>
            <p style={{textDecoration:'underline',fontSize:10}}>Terms and conditions apply.</p>
        </div>
        <div>
          <Component2/>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default Component1