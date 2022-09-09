import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './Components/Gallery'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Event from './Components/Event'
import Feedback from './Components/Feedback'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App