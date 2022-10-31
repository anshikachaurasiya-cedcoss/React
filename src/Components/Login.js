import React from 'react'
import GoogleLogin from 'react-google-login';



const Login = (props) => {
  return (
    <div className='login'>
        <img style={{height:'30px',width:'100px',margin:'10%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png' alt=''/>
        <label style={{fontSize:'1.3rem',fontWeight:'500',marginLeft:'10%'}}>Log in</label>
        <label style={{color:'grey',marginLeft:'10%'}}>Continue to Shopify</label>
        <label style={{marginLeft:'10%',marginTop:'5%'}}>Email</label>
        <input/>
        <button className='emailBtn'>Continue with Email</button>
        <div style={{display:'flex',flexDirection:'row',marginTop:'2%',color:'grey'}}><hr style={{width:'30%'}}/>Or<hr  style={{width:'30%'}}/></div>
        <button className='Btn'><i class="fa fa-apple"></i>Continue with Apple</button>
        <button className='Btn'><i class="fa fa-facebook-square"></i>Continue with Facebook</button>
        <GoogleLogin className='googleBtn'
        clientId={props.clientId} 
        buttonText={props.buttonText} 
        isSignedIn={props.isSignedIn} 
        cookiePolicy={props.cookiePolicy}
  />
    </div>
  )
}

export default Login