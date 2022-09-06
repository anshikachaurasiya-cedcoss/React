import React, { useState } from 'react'
var name='', mg='',email='',pwd='',add='',mob='',pic='',dob='',c1='';
var letters = /^([A-Z][^\s]*)/,sletters =/^\w+([ \.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,pwdv=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,phonenum =/^\d{10}$/;
const FormValidation = () => {
    const[e,setE]=useState('')
    
    const nameHandler=(event)=>{
        name = event.target.value;
        if(name.match(letters)){
            setE('')
        }
        else{
            mg='Name should contain first letter capital'
            setE(mg)
        }
    }
    const emailHandler=(event)=>{
        email=event.target.value
        if(email.match(sletters)){
            setE('')
        }
        else{
            mg='email should contain no. character and special character'
            setE(mg)
        }
    }
    const pwdHandler=(event)=>{
        pwd=event.target.value
        if(pwd.match(pwdv)){
            setE('')
        }
        else{
            mg='minimum length must be 8 contain 1 special character 1 capital 1 small letter'
            setE(mg)
        }
    }
    const addHandler=(event)=>{
        add=event.target.value
        if(add!==''){
            setE('')
        }
        else{
            mg='must be filled'
            setE(mg)
        }
    }
    const mobHandler=(event)=>{
        mob=event.target.value
        if(mob.match(phonenum)){
            setE('')
        }
        else{
            mg='must contain 10 digits'
            setE(mg)
        }
    }
    const picHandler=(event)=>{
        pic=event.target.value
        if(pic!==''){
            setE('')
        }
        else{
            mg='select a file'
            setE(mg)
        }
    }
    const dateHandler=(event)=>{
        dob = event.target.value
        if(dob!==''){
            setE('')
        }
        else{
            mg='select dob'
            setE(mg)
        }
    }
    const check=(event)=>{
        c1 = event.target.checked
        console.log(c1)
        if(c1!=='true'){
            setE('')
        }
    }
    const register=(event)=>{
        event.preventDefault()
        if(name!=='' && mg!=='' && email!=='' && pwd!=='' && add!=='' && mob!=='' && pic!=='' && dob!==''){
            mg='sucessfully submitted'
            setE(mg)
        }
        else{
            mg='all fields must be filled'
            setE(mg)
        }
    }
    const reset=()=>{
        setE('')
    }
    return (
    <div id='form'>
        <span>{e}</span>
        <form>
        <div className='des'>
            <label>Enter Your Name</label>
            <input type='text' onChange={nameHandler} />
        </div>
        <div className='des'>
            <label>Enter Your Email</label>
            <input type='text' onChange={emailHandler}/>
        </div>
        <div className='des'>
            <label>Enter Your Password</label>
            <input type='password' onChange={pwdHandler} />
        </div>
        <div className='desi'>
            <label>Enter Your Address</label>
            <textarea rows='4' columns='20' onChange={addHandler} ></textarea>
        </div>
        <div className='des'>
            <label>Enter Your Mobile</label>
            <input type='number' onChange={mobHandler} />
        </div>
        <div className='des'>
            <label>Select Your Gender</label>
            <label>Male</label><input type='radio' name='gen' onChange={check} /><label>Female</label><input type='radio' name='gen'/>
        </div>
        <div className='des'>
            <label>Choose Your hobbies</label>
            <label>Cricket</label><input type='checkbox'/><label>Singing</label><input type='checkbox'/><label>Dancing</label><input type='checkbox'/>
        </div>
        <div className='des'>
            <label>Choose your Profile Pic</label>
            <input type='file' onChange={picHandler} />
        </div>
        <div className='des'>
            <label>Select your DOB</label>
            <input type='date' onChange={dateHandler}/>
        </div>
        <button onClick={register}>Register Me</button>
        <button type='reset' onClick={reset}>Reset</button>
        </form>
    </div>
  )
}

export default FormValidation