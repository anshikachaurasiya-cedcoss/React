import React, { Component } from 'react'

export class Component2 extends Component {
  render() {
    return (
        <div id='component2'>
            <h1>The Power of Premium</h1>
            <div id='icons'>
                <div id='musicIcon'>
                    <div className='i'>
                    <i className="fa fa-music" aria-hidden="true"></i>
                    </div>
                    <p>Ad-free music listening</p>
                    <p style={{fontSize:11}}>Enjoy uninterrupted music</p>
                </div>
                <div id='musicIcon'>
                <div className='i'>
                    <i className="fa fa-music" aria-hidden="true"></i>
                    </div>
                    <p>Offline Playback</p>
                    <p style={{fontSize:11}}>Save your data by listening Offline</p>
                </div>
                <div id='musicIcon'>
                <div className='i'>
                    <i className="fa fa-music" aria-hidden="true"></i>
                    </div>
                    <p>Play Everywhere</p>
                    <p style={{fontSize:11}}>listen on Your Speakers,TV, and other favourite devices.</p>
                </div>
                <div id='musicIcon'>
                <div className='i'>
                    <i className="fa fa-music" aria-hidden="true"></i>
                </div>
                    <p>Pay your way</p>
                    <p style={{fontSize:11}}>Prepay with paytm,UPI and many more.</p>
                </div>
            </div>
        </div>
    )
  }
}
export default Component2