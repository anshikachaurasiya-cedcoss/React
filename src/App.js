import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {
  var inpVal=useRef('')
  const [arr,setArr]=useState([])

  useEffect(()=>{
    fetch(' https://newsapi.org/v2/top-headlines?country=us&apiKey=de713b26887d4c68a61209262645aa51')
    .then(res=>res.json())
    .then(data=>{
      setArr(data.articles)
      console.log(data.articles)
    })    
  },[])

  const read=(e)=>{
    var url= e.target.getAttribute('url')
    window.location.href=url
  }
  
  return (
    <div className="App">
      <Main inpVal={inpVal} arr={arr} read={read}/>
    </div>
  );
}

export default App;
