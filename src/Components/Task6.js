import React, {useState,useMemo} from 'react'

const Task6 = () => {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const increment1=()=>{
        setCounterOne(counterOne+1)
    }
    const increment2=()=>{
        setCounterTwo(counterTwo+1)
    }
   
    const isEven =  useMemo(()=>{
        let i=0
        while(i<2000000000) i++
        return counterOne%2==0
    },[counterOne])
  return (
    <div id='task6'>
        <span>{isEven ? 'even':'odd'}</span>
        <button onClick={increment1}>Count One - {counterOne}</button>
        <button onClick={increment2}>Count Two - {counterTwo}</button>
    </div>
  )
}

export default Task6