import React from 'react'
import { Link } from 'react-router-dom'
const Login = (props) => {
  return (
    <div id="douter">
      <div id='navSign'>
        <img src='nav1.png' alt=''/>
        <label style={{fontSize:'25px',fontWeight:'700'}}>.in</label>
      </div>
    <div id="form2">
    <label style={{color:'black',fontSize:'40px',height:'15%'}}>Log In</label>
        <label>Username</label>
        <input type='text' ref={props.userInp}/>
        <label>Password</label>
        <input type='password' ref={props.pwdInp}/>
        <div className='btn'>
            <button onClick={props.login}>Log In</button>
        </div>
        <Link to='/'>SignUp</Link> By continuing You will continue to amazon's conditions
    </div>
    <div id='footerSign'>
          <label style={{color:'blue',fontSize:'12px'}}>Conditions of Use &nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp; help</label>
          <label style={{fontSize:'12px'}}>@ 1996-2022, Amazon.com, Inc. or its affiliates</label>
        </div>
</div>
  )
}

export default Login







