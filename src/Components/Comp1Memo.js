import React, { useMemo, useRef, useState } from 'react'

const Comp1Memo = () => {
    var refInp1 = useRef('')
    var refInp2 = useRef('')
    var [sum,setSum]=useState()
    var [style,setStyle]=useState('green')

    // Multiply function using usememo
    
    var mult =useMemo(function multiply(){
        console.log('Multiply Function')
        return parseInt(refInp1.current.value)*parseInt(refInp2.current.value)
    },[refInp1.current.value,refInp2.current.value])

    // add function

    const add=()=>{
        sum = parseInt(refInp1.current.value)+parseInt(refInp2.current.value)
        setSum(sum)
    }

    // button toggle function

    const toggles=()=>{
        if(style=='green'){
        setStyle('yellow')
        }
        else{
            setStyle('green')
        }
    }

  return (
    <>
    <div>
        <input  type='number' placeholder='input 1' ref={refInp1}/>
        <input  type='number' placeholder='input 2' ref={refInp2}/>
        <button onClick={add}>Add Button</button>
    </div>
    Sum is:{sum}<br/>
    Multiply is:{mult}<br/>
    <button onClick={toggles} className={style}>Toggle Button</button>
    </>
  )
}

export default Comp1Memo