import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const SweetPage = (props) => {
    var obj ={name:'',price:'',image:'',quantity:'1'}
    let[newAr,setNewAr]=useState([])
    let[flg,setFlg]=useState(true)
    const addHandler=(event)=>{
        var val = event.target.getAttribute('val')
        obj.name = props.arr[0].name
        obj.price = props.arr[0].price
        obj.image = props.arr[0].image
        if(newAr.length>0){
            for(var i=0;i<newAr.length;i++){
                if(newAr[i].name===val){
                    newAr[i].quantity++
                    console.log(newAr[i])
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
    }
    const cartHandler=()=>{
        console.log(newAr.length)
        if(newAr.length==0){
            alert('Cart is Empty')
        }
        setFlg(false)
        
    }
    if(flg){
    return (
        <>
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
            <Link to='/login'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='cartIcon'>
            <i class="fa fa-heart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            <i onClick={cartHandler} class="fa fa-shopping-cart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            </div>
        </div>
        <div id='sweetImg'>
            <img src={props.arr[0].image} alt=''/>
            <div id='sweetContent'>
                <span>{props.arr[0].name}</span>
                <span>{props.arr[0].price}</span>
                <p>{props.arr[0].describe}</p>
                <button id='cart' onClick={addHandler} val={props.arr[0].name}>Add to cart</button>
            </div>
        </div>
    </div>
    </>
  )
}
else{
    return(
        <div className='main'>
            <div id='nav'>
            <div id='optionDiv'>
                <Link to='/login'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='iconDiv'>
                <i class='fas fa-user-circle' style={{fontSize:'24px'}}></i>
                <span>Hello, User</span>|<span>Accounts and Details</span>
            </div>
        </div>
            <Cart arr={newAr} />
        </div>         
    )
}
}

export default SweetPage