import React, { useState } from 'react'
let initialValues={afirstname:'',alastname:'',dob:'',detSib:'',ffirstname:'',flastname:'',fQual:'',fphone:'',femail:'',foccu:'',mfirstname:'',mlastname:'',mQual:'',mphone:'',memail:'',moccu:'',addr:''}
let mg='',count=0
var letters = /^([A-Z][^\s]*)/,sletters =/^\w+([ \.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,phonenum =/^\d{10}$/;
const Form = () => {
    const[e1,setE1]=useState('')
    const[e,setE]=useState({})
    
    const changeHandler=(event)=>{
        let val = event.target.value
        let id = event.target.getAttribute('id')
        if(id==='aFname'){
            if(val.match(letters)){
                initialValues.afirstname=''
                count=0
            }
            else{
                initialValues.afirstname='first letter of firstname should be capital'
                count++
            }
        }
        if(id==='aLname'){
            if(val.match(letters)){
                initialValues.alastname=''
                count=0
            }
            else{
                initialValues.alastname='first letter of lastname should be capital'
                count++
            }
        }
        if(id==='birth'){
            if(val!==''){
                initialValues.dob=''
                count=0
            }
            else{
               initialValues.dob='dob should be selected'
                count++
            }
        }
        if(id==='detSib'){
            if(val.length>5){
                initialValues.detSib=''
                count=0
            }
            else{
               initialValues.detSib='length of string sholud not less than 5'
               count++
            }
        }
        if(id==='fFname'){
            if(val.match(letters)){
                initialValues.ffirstname=''
                count=0
            }
            else{
                initialValues.ffirstname='first letter of firstname should be capital'
                count++
            }
        }
        if(id==='fLname'){
            if(val.match(letters)){
                initialValues.flastname=''
                count=0
            }
            else{
                initialValues.flastname='first letter of firstname should be capital'
                count++
            }
        }
        if(id==='mFname'){
            if(val.match(letters)){
                initialValues.mfirstname=''
                count=0
            }
            else{
                initialValues.mfirstname='first letter of firstname should be capital'
                count++
            }
        }
        if(id==='mLname'){
            if(val.match(letters)){
                initialValues.mlastname=''
                count=0
            }
            else{
                initialValues.mlastname='first letter of firstname should be capital'
                count++
            }
        }
        if(id==='fqual'){
            if(val.length>5){
                initialValues.fQual=''
                count=0
            }
            else{
               initialValues.fQual='length of string sholud not less than 5'
               count++
            }
        }
        if(id==='mqual'){
            if(val.length>5){
                initialValues.mQual=''
                count=0
            }
            else{
               initialValues.mQual='length of string sholud not less than 5'
               count++
            }
        }
        if(id==='address'){
            if(val.length>6){
                initialValues.addr=''
                count=0
            }
            else{
               initialValues.addr='length of string sholud not less than 6'
               count++
            }
        }
        if(id==='foc'){
            if(val.length>6){
                initialValues.foccu=''
                count=0
            }
            else{
               initialValues.foccu='length of string sholud not less than 6'
               count++
            }
        }
        if(id==='moc'){
            if(val.length>6){
                initialValues.moccu=''
                count=0
            }
            else{
               initialValues.moccu='length of string sholud not less than 6'
               count++
            }
        }
        if(id==='fpho'){
            if(val.match(phonenum)){
                initialValues.fphone=''
                count=0
            }
            else{
                initialValues.fphone='must have 10 digits'
                count++
            }
        }
        if(id==='femi'){
            if(val.match(sletters)){
                initialValues.femail=''
                count=0
            }
            else{
                initialValues.femail='email should contain 1 special character 1 small & 1 capital alphabet and a number'
                count++
            }
        }
        if(id==='mpho'){
            if(val.match(phonenum)){
                initialValues.mphone=''
                count=0
            }
            else{
                initialValues.mphone='must have 10 digits'
                count++
            }
        }
        if(id==='memi'){
            if(val.match(sletters)){
                initialValues.memail=''
                count=0
            }
            else{
                initialValues.memail='email should contain 1 special character 1 small & 1 capital alphabet and a number'
                count++
            }
        }
        setE({...initialValues})
    }
    const clickHandler=(event)=>{        
        event.preventDefault()        
        const allInputs=document.querySelectorAll('#form input')
        const arr=[]
        allInputs.forEach(input=>{
            arr.push(input.value)
        })
        arr.map((item)=>{
            if(item===''){
                count++
            }
        })
        if(count>0){
            mg = 'enter all fields'
            setE1(mg)
        }
        else{
            mg = 'SuccessFully Submitted'
            setE1(mg)
        }
    }
    return (
    <div id='form'>
        <h2>Student Registration Form</h2>
        <form>
        <div className='des'>
            <label className='labels'>Name of the Applicant's</label>
            <div className='inpDiv'>
                <div className='divLeft'>
                    <input type='text' onChange={changeHandler} placeholder='First Name' id='aFname'/>
                    <span>{initialValues.afirstname}</span>
                </div>
                <div className='divRight'>
                    <input type='text' onChange={changeHandler} placeholder='Last Name' id='aLname' />
                    <span>{initialValues.alastname}</span>
                </div>
            </div>
        </div>    
        <label className='labels'>Select your DOB</label>
        <div className='desi'>            
            <input type='date' onChange={changeHandler} id='birth'/>
            <span>{initialValues.dob}</span>
        </div>
        <div className='desig'>
            <label>Gender</label>
            <label className='labels'>Male</label><input type='radio' name='gen'/>
            <label className='labels'>Female</label><input type='radio' name='gen'/>
        </div>
        <label className='labels'>Details of Siblings</label>
        <div className='desi'>            
            <textarea rows='4' columns='20' onChange={changeHandler} id='detSib'></textarea>
            <span>{initialValues.detSib}</span>
        </div>
        <label className='labels' style={{fontSize:'1.5rem',margin:'1%'}}>Parent's Information</label>
        <div className='des'>
            <label className='labels'>Father's Name</label>
            <div className='inpDiv'>
                <div className='divLeft'>
                    <input type='text' onChange={changeHandler} placeholder='First Name' id='fFname'/>
                    <span>{initialValues.ffirstname}</span>
                </div>
                <div className='divRight'>
                <input type='text' onChange={changeHandler} placeholder='Last Name' id='fLname' />
                <span>{initialValues.flastname}</span>
                </div>
            </div>
        </div>
        <label className='labels'>Father's Qualification</label>
        <div className='desi'>            
            <input onChange={changeHandler} placeholder='Enter Highest Qualification' id='fqual'/>
            <span>{initialValues.fQual}</span>
        </div>
        <div className='labelDiv'>
        <label className='labels'>Phone</label>
        <label className='labelRight'>Email</label>
        </div>
        <div className='des'>
            <div className='inpDiv'>
                <div className='divLeft'>
                    <input type='number' onChange={changeHandler} placeholder='##########' id='fpho' />
                    <span>{initialValues.fphone}</span>
                </div>
                <div className='divRight'>
                <input type='text' onChange={changeHandler} id='femi'/>
                <span>{initialValues.femail}</span>
                </div>
            </div>
        </div>
        <label className='labels'>Father's Occupation</label>
        <div className='desi'>            
            <input onChange={changeHandler} id='foc'/>
            <span>{initialValues.foccu}</span>
        </div>
        <div className='des'>
            <label className='labels'>Mother's Name</label>
            <div className='inpDiv'>
                <div className='divLeft'>
                    <input type='text' onChange={changeHandler} placeholder='First Name' id='mFname' />
                    <span>{initialValues.mfirstname}</span>
                </div>
                <div className='divRight'>
                <input type='text' onChange={changeHandler} placeholder='Last Name' id='mLname' />
                <span>{initialValues.mlastname}</span>
                </div>
            </div>
        </div>
        <label className='labels'>Mother's Qualification</label>
        <div className='desi'>            
            <input onChange={changeHandler} placeholder='Enter Highest Qualification' id='mqual'/>
            <span>{initialValues.mQual}</span>
        </div>
        <div className='labelDiv'>
        <label className='labels'>Phone</label>
        <label className='labelRight'>Email</label>
        </div>
        <div className='des'>
            <div className='inpDiv'>
                <div className='divLeft'>
                    <input type='number' onChange={changeHandler} placeholder='#######' id='mpho' />
                    <span>{initialValues.mphone}</span>
                </div>
                <div className='divRight'>
                <input type='text' onChange={changeHandler} id='memi'/>
                <span>{initialValues.memail}</span>
                </div>
            </div>
        </div>
        <label className='labels'>Mother's Occupation</label>
        <div className='desi'>            
            <input onChange={changeHandler} id='moc'/>
            <span>{initialValues.moccu}</span>
        </div>
        <label className='labels'>Address</label>
        <div className='desi'>
            <input onChange={changeHandler} placeholder='Street Address' id='address'/>
            <span>{initialValues.addr}</span>
        </div>
        <span>{e1}</span>
        <button onClick={clickHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Form