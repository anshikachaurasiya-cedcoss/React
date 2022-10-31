import { useState } from 'react';
import './App.css';
import Login from './Components/Login';

function App() {

  const clientId='805931071323-e3n074nkcb3g3j17r1qnei7cqkf9tgsn.apps.googleusercontent.com'
  const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
  
  return (
    <div>
      <Login clientId={clientId}
      buttonText="Continue with Google" 
      onSuccess={onLoginSuccess} 
      onFailure={onLoginFailure} 
      cookiePolicy={'single_host_origin'}
      showloginButton={showloginButton} 
      showlogoutButton={showlogoutButton}
      isSignedIn={true}/>
    </div>
      
  );
}

export default App;
