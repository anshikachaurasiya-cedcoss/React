import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Category';
import MainPage from './Components/MainPage';
import Users from './Components/Users';

function App() {
  const [arr,setArr]=useState([])
  const [category,setCategory]=useState([])
  const [users,setUsers]=useState([])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(data=>{
      data[0].images[0]="https://api.lorem.space/image?w=640&h=480&r=5838"
      setArr(data)
    })
    fetch('https://api.escuelajs.co/api/v1/categories')
    .then(res=>res.json())
    .then(data=>{
      setCategory(data)
    })
    fetch('https://api.escuelajs.co/api/v1/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data)
    })
  },[])
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MainPage arr={arr}/>}/>
      <Route path='/category' element={<Category category={category}/>}/>
      <Route path='/users' element={<Users users={users}/>}/>
    </Routes>
    </div>   
  );
}

export default App;
