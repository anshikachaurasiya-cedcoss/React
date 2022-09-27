import React from 'react'
import { Link } from 'react-router-dom'

const SweetPage = (props) => {
    
    return (
    <>
    <div id='nav'>
    <div id='optionDiv'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
    </div>
    <div id='iconDiv'>
      <img src='iconToy.png' alt=''/>
      <span>Hello, User</span>|<span>Accounts and Details</span>
    </div>
    </div>   
    <div className='main'>
        <div id='nav' style={{justifyContent:'flex-end'}}>
            <div id='cartIcon'>
                <i class="fa fa-heart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
                <i onClick={props.Cart} class="fa fa-shopping-cart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
            </div>
        </div>
        {props.match.map((item)=>{
            return(
            <div id='sweetImg'>
                <img src={item.image} alt=''/>
                <div id='sweetContent'>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <p>{item.describe}</p>
                    <button id='cart' onClick={props.add} val={item.id}>Add to cart</button>
                    <div id='back'></div>
                </div> 
            </div>
            )
        })}
    </div>
    </>
    )
}

export default SweetPage