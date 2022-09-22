import React from 'react'
import { Link } from 'react-router-dom'
const Login = (props) => {
  return (
    <div id="douter">
    <div id="form2">
        <img src='toy2.png' alt=''/>
        <label>Username</label>
        <input type='text' ref={props.userInp}/>
        <label>Password</label>
        <input type='password' ref={props.pwdInp}/>
        <div className='btn'>
            <button onClick={props.login}>Log In</button>
        </div>
        <Link to='/'>SignUp</Link>
    </div>
</div>
  )
}

export default Login







