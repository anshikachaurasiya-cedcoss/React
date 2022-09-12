import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Cities from './Components/Cities';
import Drive from './Components/Drive';
import Home from './Components/Home';
import Partners from './Components/Partners';
import Path from './Components/Path';
import Web from './Components/Web';

const App = () => {
  return (
    <>
    <Web/>
    <Routes>
      <Route path='/' element={<Home/>}>HOME</Route>
      <Route path='/cities' element={<Cities/>}>CITIES</Route>
      <Route path='/drive' element={<Drive/>}>DRIVE</Route>
      <Route path='/blog' element={<Blog/>}>BLOG</Route>
      <Route path='/partners' element={<Partners/>}>PARTNERS</Route>
      <Route path='/help' element={<Path/>}>HELP</Route>
    </Routes>
    </>
  )
}

export default App


