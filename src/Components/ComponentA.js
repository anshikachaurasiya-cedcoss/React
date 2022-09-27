import React, { createRef, useState } from 'react'
import IncompleteTask from './IncompleteTask'

const ComponentA = () => {
    const[incompleteArr,setIncompleteArr]=useState([])
    const[completeArr,setCompleteArr]=useState([])
    var[index,setIndex]=useState('')
    var[txt,setTxt]=useState('Add')
    var[status1,setStatus1]=useState('')
    var textInp= createRef()
    const addBtn=(event)=>{
        var txtInp = textInp.current.value
        var btn=event.target.innerHTML
        if(btn==="Add"){
            if(txtInp!==""){
                incompleteArr.push(txtInp);
                setIncompleteArr([...incompleteArr])
                textInp.current.value=''
            }
        }
        else
        {
            if(txtInp!==""){
                if(status1=='Incomplete'){
                incompleteArr[index]=textInp.current.value
                setIncompleteArr([...incompleteArr])
                textInp.current.value=''
                setTxt('Add')
                }
                else{
                    completeArr[index]=textInp.current.value;
                    setCompleteArr([...completeArr])
                    textInp.current.value=''
                    setTxt('Add')
                }
            }
        }
    }
    const edit=(event)=>{
        index=parseInt(event.target.getAttribute('index'))
        var val=event.target.getAttribute('value')
        status1 = event.target.getAttribute('status')
        setStatus1(status1)
        textInp.current.value=val
        setTxt('Update')
        setIndex(index)
    }
    const del=(event)=>{
        var status=event.target.getAttribute('status')
        if(status==="Incomplete"){
            var delIncomplete=event.target.getAttribute('index')
            incompleteArr.splice(delIncomplete,1)
            setIncompleteArr([...incompleteArr])
        }
        else{
            var delComplete=event.target.getAttribute('index')
            completeArr.splice(delComplete,1)
            setCompleteArr([...completeArr])
        }
    }
    const clickedCheck=(event)=>{
        var status=event.target.getAttribute('status')
        if(status==="Incomplete"){
            var check=parseInt(event.target.getAttribute('index'))
            completeArr.push(incompleteArr[check]);
            incompleteArr.splice(check,1)
            event.target.checked=false
        }
        else{
            var check=event.target.getAttribute('index')
            incompleteArr.push(completeArr[check])
            completeArr.splice(check,1)
            event.target.checked=false
        }
        setCompleteArr([...completeArr])
        setIncompleteArr([...incompleteArr])
    }
  return (
    <>
    <div id='ComponentA'>
        <p>
            <input id="new-task" type="text" ref={textInp}/>
            <button onClick={addBtn}>{txt}</button>
        </p>
    </div>
    <IncompleteTask incompleteArr={incompleteArr} edit={edit} del={del} check={clickedCheck} completeArr={completeArr}/>
    </>
  )
}

export default ComponentA