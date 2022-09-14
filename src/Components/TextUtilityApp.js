import React, { useState } from 'react'

const TextUtilityApp = () => {
    const [inpVal,setInp]=useState({value:'',characters:0,words:0})
    const textHandler=(e)=>{
        inpVal.value = e.target.value
        inpVal.characters= inpVal.value.length
        const arr = inpVal.value.split(' ');
        inpVal.words=arr.length;
        setInp({...inpVal});
    }
    const btnHandler=(e)=>{
        var txt = e.target.innerHTML
        if(txt==='Upper Case'){
            inpVal.value = inpVal.value.toUpperCase()
        }
        else{
            inpVal.value = inpVal.value.toLowerCase()
        }

        setInp({...inpVal})
    }
  return (
    <div id='text'>
        <h3>TextArea</h3>
        <textarea rows='4' column='20' onChange={textHandler} value={inpVal.value}/>
        <div id='btn'>
            <button onClick={btnHandler}>Upper Case</button>
            <button onClick={btnHandler}>Lower Case</button>
        </div>
        <h2>Summary</h2>
        <span>{inpVal.words}&nbsp;words and {inpVal.characters}&nbsp; characters</span>
    </div>
  )
}

export default TextUtilityApp