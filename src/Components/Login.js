import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div id="douter">
         <div id='nav'>
            <div className='iconDiv1'>
            <i class="fa fa-facebook-f"></i>
            </div>
            <div className='iconDiv2'>
            <i class="fa fa-twitter"></i>
            </div>
            <div className='iconDiv3'>
            <i class="fa fa-linkedin-square"></i>
            </div>
            <div className='iconDiv4'>
            <i class="fa fa-instagram"></i>
            </div>
        </div>
    <div id="form2">
      <div>
          <label>Username</label><input type='text' ref={props.userInp}/>
      </div>
      <div>
          <label>Password</label><input type='password' ref={props.pwdInp}/>
      </div>
      <div>
          <button onClick={props.login}>Login</button>
      </div>
      <Link to='/'>SignUp</Link>
    </div>
  </div>
  )
}

export default Login







