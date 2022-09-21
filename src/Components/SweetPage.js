import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const SweetPage = (props) => {
    var obj ={name:'',price:'',image:'',quantity:'1'}
    let[newAr,setNewAr]=useState([])
    let[flg,setFlg]=useState(true)
    const addHandler=(event)=>{
        var val = event.target.getAttribute('val')
        obj.name = props.arr.name
        obj.price = props.arr.price
        obj.image = props.arr.image
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
        <button onClick={props.btn} id='backBtn'>Back</button>
        <div id='sweetImg'>
            <img src={props.arr.image} alt=''/>
            <div id='sweetContent'>
                <span>{props.arr.name}</span>
                <span>{props.arr.price}</span>
                <p>{props.arr.describe}</p>
                <button id='cart' onClick={addHandler} val={props.arr.name}>Add to cart</button>
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
            <Cart arr={newAr} btn={props.btn} />
        </div>         
    )
}
}

export default SweetPage