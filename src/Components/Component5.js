import React, { Component } from 'react'

export class Component5 extends Component {
  render() {
    return (
      <div id='Component5'>
        <h2>Questions?</h2>
        <p>We've got answers</p>
        <div className='selectDiv'>
            <select><option>What is Spotify and Spotify Premium?</option></select>
        </div>
        <div className='selectDiv'>
            <select><option>How do I cancel?</option></select>
        </div>
        <div className='selectDiv'>
            <select><option>How does the Duo and Family plan work?</option></select>
        </div>
        <div className='selectDiv'>
            <select><option>How many devices can I listen to?</option></select>
        </div>
        <div className='selectDiv'>
            <select><option>How does student Plan work?</option></select>
        </div>
      </div>
    )
  }
}

export default Component5