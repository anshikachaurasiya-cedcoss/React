import React from 'react'
import { Link } from 'react-router-dom'
const Login = (props) => {
  return (
    <div id="douter">
    <div id="form2">
        <img src='https://cdn-icons-png.flaticon.com/512/857/857681.png' alt=''/>
        <label>Username</label>
        <input type='text' ref={props.userInp}/>
        <label>Password</label>
        <input type='password' ref={props.pwdInp}/>
        <div className='btn'>
            <button onClick={props.login}>Log In</button>
        </div>
        <Link to='/'>SignUp</Link>
    </div>
    <div id='sweetImg1'>
    </div>
</div>
  )
}

export default Login







