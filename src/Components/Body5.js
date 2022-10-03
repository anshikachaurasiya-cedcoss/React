import React from 'react'

const Body5 = () => {
  return (
    <div className='main_body5_div'>
        <div className='small_div_body4'></div>
        <label style={{fontSize:'1.5rem'}}>Rated 'Leader' on G2.</label>
        <p style={{fontSize:'1.5rem'}}>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <i class="fa fa-star-half-full checked"></i>
            4.4 out of 5
        </p>
        <label style={{fontSize:'1.5rem'}}>Check out our Reviews</label>
        <div className='body5_div_innerImgDiv'>
            <img src='https://www.greythr.com/static/0af2ebbb91c896c9f6017a09023215b5/b5193/g2-crowd-badges.webp' alt=''/>
        </div>
    </div>
  )
}

export default Body5