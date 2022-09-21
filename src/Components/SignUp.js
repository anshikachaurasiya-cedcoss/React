import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = (props) => {
    return(
    <div id='web'>
        <div id='bodyDiv'>
            <div id='divLeft'>
                <h1>Blogging is good for your career</h1><br/>
                <h3>A well-executed blog sets you apart as an expert in your field.</h3>
            </div>
            <div id='divRight'>
                <div id='form'>
                    <h3 style={{margin:'4%'}}>To Start Blogging SignUp</h3>
                    <input placeholder='Enter Your Name' type='text' ref={props.name}/>
                    <input placeholder='Email address' type='text' ref={props.address}/>
                    <input placeholder='Phone Number' type='number' ref={props.phone}/>
                    <input placeholder='********' type='password' ref={props.pwd}/>
                    <button onClick={props.sign}>SignUp</button>
                    <Link to='/login'>LogIn</Link>
                    <div id='iconDiv'>
                        <div id='facebook'><i class="fa fa-facebook-f"></i></div>
                        <div id='twitter'><i class="fa fa-twitter"></i></div>
                        <div id='google'><i class="fa fa-google-plus"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp