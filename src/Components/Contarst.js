import React, { useState } from 'react'

const Contarst = () => {
    var txt
    var[contrast,setContarst]=useState('')
    const set=(e)=>{
        txt=e.target.getAttribute('value')
        if(txt=='Dark Contrast'){
            setContarst('blackContrast')
        }
        else if(txt=='Light Contrast'){
            setContarst('highContrast')
        }
        else{
            setContarst('lightContrast')
        }
    }
  return (
    <div className='contarst'>
        <div>
            <button onClick={set} value='Dark Contrast'><i class="fa fa-moon-o"></i><br/>Dark Contrast</button>
            <button onClick={set} value='Light Contrast'><i class="fa fa-sun-o"></i><br/>Light Contrast</button>
            <button onClick={set} value='High Contrast'><i class="material-icons">brightness_high</i><br/>High Contrast</button>
        </div>
        <img className={contrast} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3EXIprqMbKhTorq3fbaUo_AWeAOtlTBB9w&usqp=CAU' alt=''/>
    </div>
  )
}

export default Contarst


