import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
  const productsArr = [
    {name:'Camera',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDF90vTpmGXQrJMYXRPRuE28aBWtPk8twiWAcFGBJxXCT-Bton8KKYlZ5M2kdFAxGIc8c&usqp=CAU',price:'100',quantity:'1'},
    {name:'HeadPhone',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5nRjCCYf9c4rpRFqFlecNRKYzWiTQ4FDfZXwFycjR_AC1O2zQUjNkQbkrRELWbFsMVY&usqp=CAU',price:'400',quantity:'1'},
    {name:'Watch',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6Cqo1f9G1K1eKx3SmFSGSJcrpvazsf63nJCkpjPV3QD56PkN4JLK1Mz-CXlmBCEdlgc&usqp=CAU',price:'50',quantity:'1'},
    {name:'Carry Bag',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJyRdNHNsqaYRp2zrWv7bT6hB8rupIJ-6vv-m3_s2banNGidN72CAl_e2k2BTTWh8888&usqp=CAU',price:'50',quantity:'1'},
    {name:'Handwash',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkz2gWgg3ftSchUTzAIs2eCo2mccgafslWVDH61uh1gMfUSR3FN6gga8ZbPIM2Ej4Tzo&usqp=CAU',price:'50',quantity:'1'},
  ]
  let[cart,setCart]=useState([])
  let[dis,setDis]=useState('none')
  let[display,setDisplay]=useState('text_none')
  var index=''
  const btnCart=(event)=>{
    index = parseInt(event.target.getAttribute('index'))
    var val = event.target.getAttribute('val')
    if(cart.length>0){
    for(var i=0;i<cart.length;i++){
      if(cart[i].name===val){
        cart[i].quantity++
       break
      }
      else if(i===cart.length-1){
        cart.push(productsArr[index])
        break
      }
    }
    }
    else{
      cart.push(productsArr[index])
    }
    setDis('block')
    setDisplay('text_block')
    setCart([...cart])
}
const minusHandler=(event)=>{
  var ind= event.target.getAttribute('ind')
  var min = event.target.getAttribute('quant')
  if(min>0){
    min-=1
  cart[ind].quantity=min
  setCart([...cart])
  }  
}
const plusHandler=(event)=>{
  var ind = event.target.getAttribute('ind')
  var max = event.target.getAttribute('quant')
  max=parseInt(max)+parseInt(1)
  cart[ind].quantity=max
  setCart([...cart])
}
const deleteHandler=(event)=>{
  var ind = event.target.getAttribute('ind')
  cart.splice(ind,1)
  setCart([...cart])
  if(cart.length<1){
    alert("if")
    setDis('none')
    setDisplay('text_none')
  }
}
const emptyHandler=()=>{
  setDisplay('text_none')
  setDis('none')
  setCart([])
}
  return (
    <div className="App">
      <Home display={display} cart={cart} dis={dis} productsArr={productsArr} btnCart={btnCart} deleteHandler={deleteHandler} emptyHandler={emptyHandler} plusHandler={plusHandler} minusHandler={minusHandler} />      
    </div>
  );
}

export default App;
