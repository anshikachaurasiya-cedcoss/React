import React from 'react'

const Site = () => {
  return (
    <div id='feed'>
     <h1>Social Feed</h1><br/>
     <h3><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h3>
     <h4>Display Your best Social media posts in a streaming social feed</h4>
    <div id='feedDiv' >
        <div className='feed'>
            <div id='img1Div'></div>
        </div>
        
        <div className='feed'>
            <div id='img2Div'></div>
        </div>
        
        <div className='feed'>
            <div id='img3Div'></div>
        </div>
        
        <div className='feed'>
            <div id='img4Div'></div>
        </div>
    </div>
    </div>
  )
}

export default Site