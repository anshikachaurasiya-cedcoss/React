import React, { useState } from 'react'
import AddCart from './AddCart'

const Data = () => {
  
  const productsArr = [{name:'Mouse',image:'1.jpeg',price:'100',quantity:'1'},{name:'Keyboard',image:'2.jpeg',price:'400',quantity:'1'},{name:'Geometry',image:'3.png',price:'50',quantity:'1'}]
  let[cart,setCart]=useState([])
  let[dis,setDis]=useState('none')
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
    setDis('none')
  }
}
const emptyHandler=()=>{
  setDis('none')
  setCart([])
}
return (
<>
<div id='nav'>
  <span>Shopping Cart</span>
</div>
<div id='main'>
  {productsArr.map((item,i)=>{
    return (
    <div class='product' id='productid'>
      <img src={item.image} alt=''/>
      <span>
        <h3>{item.name}</h3>
      </span>
      <button className='btnCart' onClick={btnCart} index={i} val={item.name}>Add to Cart</button>
    </div>
    )
  })}
</div>
<AddCart cart={cart} minus={minusHandler} plus={plusHandler} del={deleteHandler} dis={dis} empty={emptyHandler}/>
</>
)  
}

export default Data