import { Link } from 'react-router-dom'

const SignUp = (props) => {

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
      <div id="form">
        <span>{props.msg}</span>
        <div className='labelDiv'>
            <div className='leftDiv'>
            <label>Full Name</label><input type='text' ref={props.nameInp}/>
            </div>
            <div className='rightDiv'>
                <label>Email</label><input type='text' ref={props.emailInp}/>
            </div>
        </div>
        <div className='labelDiv'>
            <div className='leftDiv'>
            <label>Username</label><input type='text' ref={props.userInp}/>
            </div>
            <div className='rightDiv'>
                <label>Password</label><input type='password' ref={props.pwdInp}/>
            </div>
        </div>
        <div className='labelDiv'>
            <div className='leftDiv'>
            <label>Mobile</label><input type='number' ref={props.mobInp}/>
            </div>
            <div className='rightDiv'>
                <label>City</label><input type='text' ref={props.cityInp}/>
            </div>
        </div>
        <div className='labelDiv'>
            <div className='leftDiv'>
            <label>Country</label><input type='text' ref={props.countryInp}/>
            </div>
            <div className='rightDiv'>
                <label>Pincode</label><input type='number' ref={props.pinInp}/>
            </div>
        </div>
        <div className='labelDiv'>
            <button onClick={props.login}>Sign Up</button>
        </div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default SignUp





