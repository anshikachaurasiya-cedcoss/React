import React from 'react'

const ComponentA = () => {
  return (
    <div className='main_div'>
      <img src='wave.png' alt=''/>
      <div className='labels_div'>
        <label style={{color:'blue'}}>Sign Up</label>&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:'purple', marginRight:'2%'}}>Sign In</label>
      </div>
      <div className='form_div'>
        <input placeholder='Username'/>
        <input placeholder='Full name'/>
        <input placeholder='Email'/>
        <input placeholder='Password'/>      
      </div>
      <div className='form_div_below'>
        <div><i class="fa fa-check" style={{color:'white'}}></i></div>
        <label style={{color:'#2747e7'}}>Agree With</label><label style={{color:'blue'}}>Terms & Conditions</label>
      </div>
      <button className='btn'>Sign Up</button>
      <label className='label'>I'm already a member</label>
    </div>
  )
}

export default ComponentA