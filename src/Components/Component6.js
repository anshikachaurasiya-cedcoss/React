import React, { Component } from 'react'
export class Component6 extends Component {
  render() {
    return (
    <div id='Component6'>
        <div id='mainComponent'>
            <div id='imageDiv5'>
                <img className='imagespotify' src='https://w0.peakpx.com/wallpaper/601/350/HD-wallpaper-spotify-black-white.jpg'/>
                <p style={{color:'white',fontSize:20}}>Spotify</p>
            </div>
            <div className='companyDiv'>
                <label style={{color:'gray',margin:5}}>COMPANY</label>
                <label style={{color:'white',margin:5,fontSize:11}}>About</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Jobs</label>
                <label style={{color:'white',margin:5,fontSize:11}}>For the Record</label>
            </div>
            <div className='companyDiv'>
                <label style={{color:'gray',margin:5}}>COMMUNITIES</label>
                <label style={{color:'white',margin:5,fontSize:11}}>For artists</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Developers</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Advertising</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Investors</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Vendors</label>
            </div>
            <div className='companyDiv'>
                <label style={{color:'gray',margin:5}}>USEFUL LINKS</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Support</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Web Player</label>
                <label style={{color:'white',margin:5,fontSize:11}}>Free Mobile App</label>
            </div>
            <div id='iconDiv'>
                <div className='i2'>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className='i2'>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className='i2'>
                     <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div id='Footer'>
            <div id='leftFooter'>
                <p>Legal</p>
                <p>Privacy Center</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>About Ads</p>
            </div>
            <div id='rightFooter'>
                <label>India English</label>
                <label>2022 spotify AB</label>
            </div>
        </div>
    </div>
    )
  }
}

export default Component6