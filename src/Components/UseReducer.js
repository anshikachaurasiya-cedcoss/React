import React, { useReducer, useRef, useState } from 'react'
import Modal from 'react-modal'
import ShowModal from './ShowModal'

const initialState={
    obj:[]
}
// reducer function
const reducer=(state,action)=>{
    switch(action.type){         
        case 'Updated_value':
        return{
            ...state,
            obj:action.payload
        }
        default:
        return{
            state
        }
    }
}

const UseReducer = () => {

    var [modalIsOpen,setModalIsOpen]=useState(false)
    var titleInp=useRef(''),desInp=useRef(''),timeInp=useRef(''),checkInp=useRef(''),radio1Inp=useRef(''),radio2Inp=useRef('')
    var object={}
    
    const [state,dispatch]=useReducer(reducer,initialState)
    // Onsubmit function which shows modal as output 
    const show=(e)=>{
        e.preventDefault()
        if(titleInp.current.value!=='' && desInp.current.value!=='' && timeInp.current.value!=='' && checkInp.current.checked!==''){
            var check = checkInp.current.checked?checkInp.current.value:checkInp.current.value
            var radioVal = radio1Inp.current.checked?radio1Inp.current.value:radio2Inp.current.value
            object={title:titleInp.current.value,description:desInp.current.value,time:timeInp.current.value,check:check,radio:radioVal}  
            dispatch({type:'Updated_value',payload:object})
            setModalIsOpen(true)
            reset()
        }
        else{
            alert('fill all details')
        }
    }
    // function resets the form values 
    const reset=()=>{
        titleInp.current.value=''
        desInp.current.value=''
        timeInp.current.value=''
        radio1Inp.current.checked=''
        radio2Inp.current.checked=''
        checkInp.current.checked=''
    }
    //function closes the modal component
    const close=()=>{
        setModalIsOpen(false)
    }

    return (
    <>
    <form onSubmit={show}>
    <div className='reducerDiv'><label>Title:</label><div><input ref={titleInp}/></div></div>
    <div className='reducerDiv'><label>Description:</label><div><input ref={desInp}/></div></div>
    <div className='reducerDiv'><label>Handling Time:</label><div><input ref={timeInp}/></div></div>
    <div className='reducerDiv'><label>BarCode/GTIN Exemption</label><div style={{flexDirection:'row',display:'flex'}}><input type='checkbox' ref={checkInp}/><label>BarCode/GTIN Exemption</label></div></div>
    <div className='reducerDiv'><label>Image Selection:</label><div><input type='radio' name='jdf' ref={radio1Inp} value='Set Product images as Shown in Shopify'/><label>Set Product images as Shown in Shopify</label><input type='radio' name='jdf' ref={radio2Inp} value='Set Custom Amazon images'/><label>Set Custom Amazon images</label></div></div>
    <button className='addBtn' type='submit' >Add</button>
    </form>
    <Modal style={{width:'70%'}} isOpen={modalIsOpen}>
        <ShowModal state={state} close={close}/>
    </Modal>
    </>
  )
}

export default UseReducer