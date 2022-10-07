import React, { useEffect, useRef, useState } from 'react'

const Weather = () => {
    var inpVal=useRef(null)
    var[location,setLocation]=useState({})
    var[current,setCurrent]=useState({})
    var[condition,setCondition]=useState({})
    var[style,setStyle]=useState('none')
    const search=()=>{
        if(inpVal.current.value!==''){
        fetch('https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location='+inpVal.current.value)
        .then(res=> res.json())
        .then(data=>{
            setLocation(data.location)
            setCurrent(data.current)
            setCondition(data.current.condition)
        })
        setStyle('block')
    }
    else{
        setStyle('none')
    }
    }

    useEffect(() => {
        if (inpVal.current) {
          inpVal.current.focus();
        }
      }, []);

  return (
    <div className={`nothing ${condition.text}`}>
        <h1 style={{color:'white'}}>Weather App</h1>  
        <input placeholder='Search...' ref={inpVal} />
        <button onClick={search}>Search</button>
        <div className={style}>
            <img src={condition.icon} alt=''/>
            <label className='city'>{location.name},{location.country}</label>
            <label className='label'>{location.localtime}&nbsp;Today</label>
            <h1 className='temp'>{current.temp_c}°C</h1>
            <h1 className='text'>{condition.text}</h1>
        </div>
    </div>
  )
}

export default Weather