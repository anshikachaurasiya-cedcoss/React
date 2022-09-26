import React, { useState } from 'react'
var interval;

const Task3 = () => {
    var[hr,setHr]=useState(0)
    var[min,setMin]=useState(0)
    var[sec,setSec]=useState(0)

    const startTimer=()=>{
        clearInterval(interval)
        hr=new Date().getHours();
        min=new Date().getMinutes();
        sec=new Date().getSeconds();
        interval = setInterval(start,1000)
    }

    const start=()=>{
        if(sec>=1){
            sec--;
        }
        else{
            sec=59;
            if(min>=1){
                min--;
            }
            else{
                min=59;
                if(hr>1){
                    hr--;
                }
                else{
                    hr=0
                }
            }
        }
        setHr(hr)
        setMin(min)
        setSec(sec)
    }
  return (
    <div id='task3'>
        <div id='counter'>
            <h3>CountDown Timer</h3><br/>
            <h1>{hr}:{min}:{sec}</h1>
            <button onClick={startTimer}>Start</button>
        </div>
    </div>
  )
}

export default Task3