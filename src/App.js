import './App.css';
import React, { useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Brand from './Components/Brand';

const jsonArr=['anshika.commerce','rita.shoppers','jai.nic','aman.boutique']

function App() {
  var inputVal=useRef('')
  var navigate=useNavigate('')
  var [arr,setArr]=useState({unavailable:[],available:[]})

  const search=()=>{
    var inp = inputVal.current.value
    if(inp!==''){
      for(var i=0;i<jsonArr.length;i++){
        if(inp.toLowerCase()==jsonArr[i].slice(0,inp.length)){
          arr.unavailable=[jsonArr[i]]
          setArr({...arr})
        }
        else
        {
          var obj=[inp+'.com',inp+'.org',inp+'.shopping',inp+'.shop',inp+'.in']
          arr.available=[...obj]
          setArr({...arr})
        }
      }
        navigate('/brands')
    }
    else{
      alert('fill entries')
    }
  }
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage inputVal={inputVal} search={search}/>}/>
        <Route path='/brands' element={<Brand arr={arr} inputVal={inputVal}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
