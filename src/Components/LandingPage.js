import React, { useEffect, useRef, useState } from 'react'

const LandingPage = () => {
    const [arr,setArr]=useState([])
    var inpVal=useRef()
    const search=()=>{
        fetch('https://openlibrary.org/search.json?q=fantastic+mr+fox&mode=ebooks&has_fulltext=true')
        .then(res=>res.json())
        .then(data=>{
            setArr(data.docs)
            console.log(data)
            console.log(data.docs)
        })
    }
    useEffect(() => {
        if (inpVal.current) {
          inpVal.current.focus();
        }
      }, []);
      
      return (
      <div className='landingPage'>
        <div className='landingPage_innerdiv1'>
            <div className='landingpage_right'>
                <h1>Room Without books is like a body without soul...</h1>
                <img src='pic.png' alt=''/>
            </div>
            <div className='landingpage_right'>
                <input ref={inpVal}/>
                <button onClick={search}>Search</button>
            </div>
        </div>
        <div className='list'>
            {arr.map((item)=>{
                return(
                <div className='item'>
                    <p>{item.title}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default LandingPage