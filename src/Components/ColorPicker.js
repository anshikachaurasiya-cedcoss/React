import { Box } from '@mui/material'
import React, { useState } from 'react'

const ColorPicker = () => {
  var [col,setCol]=useState('')
  var [txtCol,setTxtCol]=useState('')
  var [pCol,setPCol]=useState('')
  var color,txt
  const change=(e)=>{
    txt = e.target.parentElement.previousElementSibling.innerHTML
    if(txt=='Adjust text Colors'){
      color=e.target.getAttribute('color')
      setPCol(color)
    }
    else if(txt=='Adjust Title Colors'){
      color=e.target.getAttribute('color')
      setTxtCol(color)
    }
    else{
      color = e.target.getAttribute('color')
      setCol(color)
    }
  }
  const cancel=(e)=>{
    txt =e.target.previousElementSibling.previousElementSibling.innerHTML
    if(txt=='Adjust text Colors'){
      setPCol('blacktxt')
    }
    else if(txt=='Adjust Title Colors'){
      setTxtCol('blacktxt')
    }
    else{
      setCol('white')
    }
    
  }
  return (
    <Box className='main'>
      <div>
      <Box className='box1'>
        <label>Adjust text Colors</label>
        <div className='btn_div'>
          <button className='blue' color='bluetxt' onClick={change}/>
          <button className='purple' color='purpletxt' onClick={change}/>
          <button className='red' color='redtxt' onClick={change}/>
          <button className='orange' color='orangetxt' onClick={change}/>
          <button className='green' color='greentxt' onClick={change}/>
          <button className='black' color='blacktxt' onClick={change}/>
          <button className='yellow' color='yellowtxt' onClick={change}/>
          <button className='grey' color='greytxt' onClick={change}/>
        </div>        
        <button onClick={cancel}>Cancel</button>
      </Box>
      <Box className='box1'>
        <label>Adjust Title Colors</label>
        <div className='btn_div'>
          <button className='blue' color='bluetxt' onClick={change}/>
          <button className='purple' color='purpletxt' onClick={change}/>
          <button className='red' color='redtxt' onClick={change}/>
          <button className='orange' color='orangetxt' onClick={change}/>
          <button className='green' color='greentxt' onClick={change}/>
          <button className='black' color='blacktxt' onClick={change}/>
          <button className='yellow' color='yellowtxt' onClick={change}/>
          <button className='grey' color='greytxt' onClick={change}/>
        </div>        
        <button onClick={cancel}>Cancel</button>
      </Box>
      <Box className='box1'>
        <label>Adjust Background Colors</label>
        <div className='btn_div'>
          <button className='blue' color='blue' onClick={change}/>
          <button className='purple' color='purple' onClick={change}/>
          <button className='red' color='red' onClick={change}/>
          <button className='orange' color='orange' onClick={change}/>
          <button className='green' color='green' onClick={change}/>
          <button className='black' color='black' onClick={change}/>
          <button className='yellow' color='yellow' onClick={change}/>
          <button className='grey' color='grey' onClick={change}/>
        </div>        
        <button onClick={cancel}>Cancel</button>
      </Box>
      </div>
      <div className={`box2 ${col}`}>
        <h3 className={txtCol}>Title</h3>
        <p className={pCol}>lorem lorem djsds jhsds r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the r the prebuilt SVG Material Icons (such as those found in the
        </p>
        <h3 className={txtCol}>Title</h3>
        <p className={pCol}>lorem lorem djsds jhsds r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the r the prebuilt SVG Material Icons (such as those found in the
        </p>
        <h3 className={txtCol}>Title</h3>
        <p className={pCol}>lorem lorem djsds jhsds r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the 
          r the prebuilt SVG Material Icons (such as those found in the r the prebuilt SVG Material Icons (such as those found in the
        </p>
      </div>
    </Box>
  )
}

export default ColorPicker