import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';

function App() {
  const select=()=>{
    alert()
  }
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage select={select}/>}/>
      </Routes>      
    </React.Fragment>
  );
}

export default App;
