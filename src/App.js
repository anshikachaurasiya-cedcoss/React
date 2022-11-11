import { useEffect, useState } from 'react';
import './App.css';
import data from './data.txt';

function App() {
  var[str,setStr]=useState('')
  useEffect(()=>{
    fetch(data)
    .then(res=>res.text())
    .then(data=>{
      var i = data
      setStr(data)
    })
  },[])
  return (
    <div className="App">
      {str}
    </div>
  );
}

export default App;
