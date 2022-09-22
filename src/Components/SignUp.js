import { Link } from 'react-router-dom'

const SignUp = (props) => {

  return (
    <div id="douter">
        <div id="form">
            <span>{props.msg}</span>
            <img src='toy.png' alt=''/>
            <label>Full Name</label>
            <input type='text' ref={props.nameInp}/>
            <label>Username</label>
            <input type='text' ref={props.userInp}/>
            <label>Password</label>
            <input type='password' ref={props.pwdInp}/>
            <div className='btn'>
                <button onClick={props.login}>Sign Up</button>
            </div>
            <Link to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default SignUp