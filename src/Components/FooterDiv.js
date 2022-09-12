import React from 'react'

const FooterDiv = () => {
  return (
    <div id='footer'>
        <h2>See How Much You Can Make</h2>
        <span>How many hours do you want to drive this week?</span>
        <div id='btn'>
            <input placeholder='Hours'/>
            <input placeholder='City'/>
            <button>CALCULATE</button>
        </div>
    </div>
  )
}

export default FooterDiv




