import React, { useReducer, useRef } from 'react'

const initialState={
    obj:[]
}

const reducer=(state,action)=>{
    switch(action.type){         
        case 'Updated_value':alert('case 1')
        return{
            state:action.payload
        }
        default:alert('default')
        return{
            state
        }
    }
}

const UseReducer = () => {

    var titleInp=useRef(''),desInp=useRef(''),timeInp=useRef(''),checkInp=useRef(''),radio1Inp=useRef(''),radio2Inp=useRef('')
    var object={}
    
    const [state,dispatch]=useReducer(reducer,initialState)

    const add=()=>{
        var radioVal = radio1Inp.current.checked?radio1Inp.current.value:radio2Inp.current.value
        object={title:titleInp.current.value,description:desInp.current.value,time:timeInp.current.value,check:checkInp.current.checked,radio:radioVal}  
        console.log(object)
        dispatch({type:'Updated_value'})
    }


    return (
    <>
    <div className='reducerDiv'><label>Title:</label><div><input ref={titleInp}/></div></div>
    <div className='reducerDiv'><label>Description:</label><div><input ref={desInp}/></div></div>
    <div className='reducerDiv'><label>Handling Time:</label><div><input ref={timeInp}/></div></div>
    <div className='reducerDiv'><label>BarCode/GTIN Exemption</label><div style={{flexDirection:'row',display:'flex'}}><input type='checkbox' ref={checkInp}/><label>BarCode/GTIN Exemption</label></div></div>
    <div className='reducerDiv'><label>Image Selection:</label><div><input type='radio' name='jdf' ref={radio1Inp} value='Set Product images as Shown in Shopify'/><label>Set Product images as Shown in Shopify</label><input type='radio' name='jdf' ref={radio2Inp} value='Set Custom Amazon images'/><label>Set Custom Amazon images</label></div></div>
    <button className='addBtn' type='submit' onClick={add}>Add</button>
    </>
  )
}

export default UseReducer