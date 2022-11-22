
import React, { useState } from 'react'

const HOC2 = (Component,url) => {

    const UrlFunction=()=>{
        var[urL,setUrL]=useState('')
        const btn2Handler=()=>{
            fetch(url)
            .then(res=>res.json()) 
            .then(data=>{
                console.log(data)
                setUrL(data.users)
            })
        }
        return <Component urL={urL} btn2Handler={btn2Handler}/>
    }

  return UrlFunction
}

export default HOC2