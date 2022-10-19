import './App.css';
import React, { useRef, useState } from 'react';
import Map from './Components/Map';

function App() {
  var latInp=useRef('')
  var lngInp=useRef('')
  const [lat,setLat]=useState('')
  const [lng,setLng]=useState('')
  const submit=(e)=>{
    e.preventDefault()
    setLat(latInp.current.value)
    setLng(lngInp.current.value)
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
      <label>Latitude:</label>
      <input ref={latInp}/>
      <label>Longitude:</label>
      <input ref={lngInp}/>
      <button type='submit' style={{display:'none'}}/>
      </form>      
      <Map lat={lat} lng={lng}/>
    </div>
  );
}

export default App;
