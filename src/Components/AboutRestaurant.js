import React from 'react'

const AboutRestaurant = (props) => {
    
    return (
    <div id='sweetImg'>
        <button onClick={props.btn}>Back</button>
        <div className='imgDiv'>
        <img src={props.arr.photograph} alt=''/>
        </div>
        <div id='imgContent'>
        <h3>{props.arr.name}</h3><br/>
        <h4>Operating hours</h4>
            <div id='operatingDiv'>
                <span>Monday: {props.arr.operating_hours.Monday}</span><br/>
                <span>Tuesday: {props.arr.operating_hours.Tuesday}</span><br/>
                <span>Wednesday: {props.arr.operating_hours.Wednesday}</span><br/>
                <span>Thursday: {props.arr.operating_hours.Thursday}</span><br/>
                <span>Friday: {props.arr.operating_hours.Friday}</span><br/>
                <span>Saturday: {props.arr.operating_hours.Saturday}</span><br/>
                <span>Sunday: {props.arr.operating_hours.Sunday}</span><br/>

            </div>
            <h3>Reviews</h3>
        {props.arr.reviews.map((item)=>{
                return( <div id='reviewDiv'>
                    <div id='reviewSpan'>
                    <span className='nameSpan'>Name: {item.name}</span><br/>
                    <span className='nameSpan'>Date: {item.date}</span><br/> 
                    <span className='nameSpan'>Rating: {item.rating} <span style={{color:'rgb(216, 180, 19)'}} class="fa fa-star checked"></span></span><br/>
                    </div>                   
                    <span style={{margin:'0%',fontSize:'1.2rem',display:'flex',textAlign:'justify'}}>Comment:- {item.comments}</span>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default AboutRestaurant