
import React from 'react'
import Cart from './Cart'

const SweetPage = (props) => {
    console.log(props.flg)
    if(props.flg===false){
    return (
    <>
    <div className='main'>
        <div id='nav' style={{justifyContent:'flex-end'}}>
            <div id='cartIcon'>
                <i class="fa fa-heart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
                <i onClick={props.Cart} class="fa fa-shopping-cart" style={{fontSize:"24px",color:'dodgerblue'}}></i>
            </div>
        </div>
        <button onClick={props.btn} id='backBtn'>Back</button>
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
    else{
    return(
        <div className='main'>
            <Cart arr={props.cart} btn={props.btn}  />
        </div>         
    )
}
}

export default SweetPage