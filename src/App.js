import { createRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Site from './Components/Site';

function App() {
  var nameInp=createRef(),emailInp=createRef(),userInp=createRef(),pwdInp=createRef(),mobInp=createRef(),cityInp=createRef(),countryInp=createRef(),pinInp=createRef()
  var arr=[]
  const[flg,setFlg]=useState(true)
  const[msg,setMsg]=useState()
  const[array,setArray]=useState(arr)
  const loginHandler=()=>{
    var nameIn = nameInp.current.value
    var emailIn = emailInp.current.value
    var userIn = userInp.current.value
    var pwdIn = pwdInp.current.value
    var mobIn = mobInp.current.value
    var cityIn = cityInp.current.value
    var countryIn = countryInp.current.value
    var pinIn = pinInp.current.value
    var obj={name:nameIn,email:emailIn,user:userIn,pwd:pwdIn,phone:mobIn,city:cityIn,country:countryIn,pin:pinIn}
    if(nameIn!=='' && emailIn!=='' && userIn!=='' && pwdIn!=='' && mobIn!=='' && cityIn!=='' && countryIn!=='' && pinIn!==''){
        arr.push(obj)
        setArray(arr)
        setMsg('Signup Successfully')
        nameInp.current.value=''
        emailInp.current.value=''
        userInp.current.value=''
        pwdInp.current.value=''
        mobInp.current.value=''
        cityInp.current.value=''
        countryInp.current.value=''
        pinInp.current.value=''
    }
    else{
        setMsg('Fill all Fields')
    }
}
const loginBtn=()=>{
  var pwdIn = pwdInp.current.value
  var userIn = userInp.current.value
  if(array[0].user!=='' && array[0].pwd!==''){
    if(pwdIn===array[0].pwd && userIn===array[0].user){
      alert('Logged In')
      pwdInp.current.value=''
      userInp.current.value=''
      setFlg(false)
    }
    else{
      setMsg('invalid credentials')
    }
  }
  else{
    alert('error')
  }
}

if(flg){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp login={loginHandler} msg={msg} pinInp={pinInp} countryInp={countryInp} cityInp={cityInp} mobInp={mobInp} pwdInp={pwdInp} userInp={userInp} emailInp={emailInp} nameInp={nameInp}/>}>Home</Route>
        <Route path='/login' element={<Login login={loginBtn} msg={msg} userInp={userInp} pwdInp={pwdInp}/>}>Login</Route>
      </Routes>
    </div>
  );
}else{
    return( 
    <div className='App'>
     <Site/>
    </div>
  )
}
}

export default App;


