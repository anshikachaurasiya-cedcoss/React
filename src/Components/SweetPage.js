import React, { useState } from 'react'
import Cart from './Cart'

const SweetPage = (props) => {
    let[newAr,setNewAr]=useState([])
    let[flg,setFlg]=useState(true)
    const addHandler=(event)=>{
        var val = event.target.getAttribute('val')
        var obj ={name:props.arr.name,price:props.arr.price,image:props.arr.image,quantity:'1'}
        if(newAr.length>0){
            for(var i=0;i<newAr.length;i++){
                if(newAr[i].name===val){
                    newAr[i].quantity++
                    break
                }
                else if(i===newAr.length-1){
                    newAr.push(obj)
                    break
                }
            }
        }
        else{
            newAr.push(obj)
        }
        setNewAr([...newAr])
        alert('Sucessfully added to cart')
    }
    const cartHandler=()=>{
        if(newAr.length==0){
            alert('Cart is Empty')
        }
        setFlg(false) 
    }
    if(flg){
    return (
    <>
    <div className='main'>
        <div id='nav' style={{justifyContent:'flex-end'}}>
            <div id='cartIcon'>
                <i class="fa fa-heart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
                <i onClick={cartHandler} class="fa fa-shopping-cart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
            </div>
        </div>
        <button onClick={props.btn} id='backBtn'>Back</button>
        <div id='sweetImg'>
            <img src={props.arr.image} alt=''/>
            <div id='sweetContent'>
                <span>{props.arr.name}</span>
                <span>{props.arr.price}</span>
                <p>{props.arr.describe}</p>
                <button id='cart' onClick={addHandler} val={props.arr.name}>Add to cart</button>
                <div id='back'></div>
            </div>
        </div>
    </div>
    </>
  )
}
else{
    return(
        <div className='main'>
            <Cart arr={newAr} btn={props.btn} />
        </div>         
    )
}
}

export default SweetPage