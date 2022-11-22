import React, { useState } from 'react'

const HOC = (Component,increment) => {

    const MyFunction=()=>{
        var[value,setValue]=useState(0)
        const btnHandler=()=>{
            setValue(value+increment)
        }
        return <Component value={value} btnHandler={btnHandler}/>
    }
    
    return MyFunction
}

export default HOC