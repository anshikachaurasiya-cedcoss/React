import { createRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import SignUp from './Components/SignUp';
import ContactUs from './Components/ContactUs';

function App() {
  var nameInp=createRef(),userInp=createRef(),pwdInp=createRef()
  var arr=[]
  const[flg,setFlg]=useState(true)
  const[msg,setMsg]=useState()
  const[array,setArray]=useState(arr)
  const signHandler=()=>{
    var nameIn = nameInp.current.value
    var userIn = userInp.current.value
    var pwdIn = pwdInp.current.value
    var obj={name:nameIn,user:userIn,pwd:pwdIn}
    if(nameIn!=='' && userIn!=='' && pwdIn!==''){
        arr.push(obj)
        setArray(arr)
        setMsg('Signup Successfully')
        nameInp.current.value=''
        userInp.current.value=''
        pwdInp.current.value=''
    }
    else{
        setMsg('Fill all Fields')
    }
}
const loginHandler=()=>{
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
      alert("enter valid credentials")
      setMsg('invalid credentials')
    }
  }
  else{
    alert('error')
  }
}
if(flg){
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp login={signHandler} msg={msg} pwdInp={pwdInp} userInp={userInp} nameInp={nameInp}/>}>Home</Route>
        <Route path='/login' element={<Login login={loginHandler} msg={msg} userInp={userInp} pwdInp={pwdInp}/>}>Login</Route>
      </Routes>
    </div>
  )
}
else{
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<MainPage/>}>Home</Route>
        <Route path='/about' element={<AboutUs/>}>About Us</Route>
        <Route path='/contact' element={<ContactUs/>}>Contact Us</Route>
      </Routes>
    </div>
  );
}
}

export default App;