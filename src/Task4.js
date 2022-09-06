import React, { useState } from 'react'

const Task4 = () => {
    const[theme,setTheme]=useState('')
    const[txt,setTxt] = useState('Light Theme')
    var col ='light'
    const clickHandler=(event)=>{
        var val = event.target.innerText
        if(val==='Light Theme'){
            col='dark'
            setTheme(col)
            setTxt('Dark Theme')
        }
        else{
            col='light'
            setTheme(col)
            setTxt('Light Theme')
        }
    }
  return (
    <div id='Task4'>
        <h2>Task4</h2>
        <h5>Q4. Create a button that converts the forms theme to dark mode/Light mode (Dark mode: Background color Black text white)</h5>
        <div className={theme}>
            <label>This Task changes the background color of form</label><br/>
            <button onClick={clickHandler}>{txt}</button>
        </div>
    </div>
  )
}

export default Task4