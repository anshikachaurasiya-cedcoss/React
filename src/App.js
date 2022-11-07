import { useState } from 'react';
import './App.css';
import TotalCases from './Components/TotalCases';
import csv from './csvjson.json';

function App() {
  const [arr,SetArr]=useState(csv)
  var [count,setCount]=useState(0)
  var [status,setStatus]=useState('')
  const click=(e)=>{
    var txt = e.target.getAttribute('value')
    if(txt=='Continent'){
      if(count==0){
        let a = arr.sort((a,b)=>a.Continent>b.Continent?1:-1);
        SetArr([...a])
        setCount(1)
      }
      else{
        let a = arr.sort((a,b)=>a.Continent<b.Continent?1:-1);
        SetArr([...a])
        setCount(0)
      }
    }
    else if(txt=='Country/Region'){
      if(count==0){
      let a = arr.sort((a,b)=>a.Country>b.Country?1:-1);
        SetArr([...a])
        setCount(1)
      }
      else{
        let a = arr.sort((a,b)=>a.Country<b.Country?1:-1);
        SetArr([...a])
        setCount(0)
      }
    }
    else if(txt =='Total Cases'){
      if(count==0){
        let a = arr.sort((a,b)=>a.TotalCases>b.TotalCases?1:-1);
          SetArr([...a])
          setCount(1)
        }
        else{
          let a = arr.sort((a,b)=>a.TotalCases<b.TotalCases?1:-1);
          SetArr([...a])
          setCount(0)
        }
    }
    else if(txt=='Total Deaths'){
      if(count==0){
        let a = arr.sort((a,b)=>a.TotalDeaths>b.TotalDeaths?1:-1);
          SetArr([...a])
          setCount(1)
        }
        else{
          let a = arr.sort((a,b)=>a.TotalDeaths<b.TotalDeaths?1:-1);
          SetArr([...a])
          setCount(0)
        }
    }
    else if(txt=='Total Recoveries'){
      if(count==0){
        let a = arr.sort((a,b)=>a.TotalRecovered>b.TotalRecovered?1:-1);
          SetArr([...a])
          setCount(1)
        }
        else{
          let a = arr.sort((a,b)=>a.TotalRecovered<b.TotalRecovered?1:-1);
          SetArr([...a])
          setCount(0)
        }
    }
  }
  return (
    <div className="App">
      <h1>Corona Meter</h1>
      <TotalCases arr={arr} click={click} status={status}/>
    </div>
  );
}

export default App;
