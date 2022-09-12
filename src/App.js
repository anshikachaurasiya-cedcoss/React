import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Select from './Components/Select';
import Web from './Components/Web';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
    <Web/>
    <Routes>
      <Route path='/' element={<Home/>}>HOME</Route>
      <Route path='/select' element={<Select/>}>Select Products</Route>
      <Route path='/contact' element={<Contact/>}>Contact Us</Route>
    </Routes>
    </>
  )
}

export default App