import { createRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  var nameInp= createRef(),addInp=createRef(),phoneInp=createRef(),pwdInp=createRef(),arr=[]
  var[Arr,setArr]=useState(arr)
  var[flg,setFlg]=useState(true)

  const signHandler=()=>{
    var obj={name:nameInp.current.value,add:addInp.current.value,phone:phoneInp.current.value,pwd:pwdInp.current.value}
    arr.push(obj)
    if(nameInp.current.value!=='' && addInp.current.value!=='' && phoneInp.current.value!=='' && pwdInp.current.value!==''){
    setArr([...arr])
    alert('Signup Successfully')
    pwdInp.current.value=''
    nameInp.current.value=''
    addInp.current.value=''
    phoneInp.current.value=''
    }
    else{
      alert('Fill all Fields')
    }
  }

  const loginHandler=()=>{
    if(addInp.current.value!='' && phoneInp.current.value!='' && pwdInp.current.value!=''){
      if(Arr[0].address!=='' && Arr[0].pwd!=='' && Arr[0].phone!==''){
        if(addInp.current.value===Arr[0].add && pwdInp.current.value===Arr[0].pwd){
          alert('Sucessfully Login')
          setFlg(false)
        }
        else{
          alert('invalid details')
        }
      }
    }
    else{
      alert('Fill all fields')
    }
  }

  if(flg){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp name={nameInp} address={addInp} phone={phoneInp} pwd={pwdInp} sign={signHandler}/>}/>
        <Route path='/login' element={<Login login={loginHandler} address={addInp} phone={phoneInp} pwd={pwdInp}/>}/>
      </Routes>
    </div>
  );
  }
  else{
    return(
    <div className="App">
      <Home/>
    </div>
    )
  }
}

export default App;
