import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Payment = (props) => {
    const myDetails=[{name:'Anshika',card:'1234567',exp:'07/23',cvv:'123'}]
    const nameInp = React.createRef()
    const cardInp = React.createRef()
    const expInp = React.createRef()
    const cvvInp = React.createRef()
    var[msg,setMsg]=useState('')
    var[css,setCss]=useState('')

    const payHandler=()=>{
        if(myDetails[0].name==nameInp.current.value && myDetails[0].card==cardInp.current.value && myDetails[0].exp==expInp.current.value && myDetails[0].cvv==cvvInp.current.value){
            setMsg('Payment Completed Successfully!!')
            setCss('green')
            nameInp.current.value=''
            cardInp.current.value=''
            cvvInp.current.value=''
            expInp.current.value=''
            document.getElementById('h').innerHTML='Paid'
        }
        else{
            setMsg('Payment Failed!')
            setCss('red')
        }
    }
  return (
    <>
    <div id='nav'>
            <Link to='/home'>
                <img src='nav2.png' alt='' style={{height:'50px'}}/>
            </Link>
            <div style={{width:'15%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                <label style={{fontSize:'12px'}}>Hello</label>
                <label>Select Your Address</label>
            </div>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={props.click}>
                <i class="fa fa-search" style={{fontSize:"24px",color:'black'}}></i>
                </button>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                    <label style={{fontSize:'10px'}}>Hello</label>
                    <label>Select Your Address</label>
                </div>&nbsp;&nbsp;&nbsp;
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                    <label style={{fontSize:'10px'}}>Returns</label>
                    <label>& Orders</label>
                </div>
                <i class="fa fa-shopping-cart" style={{fontSize:"30px",margin:'1%'}}></i>
                <label style={{marginTop:'2%'}}>Cart</label>
        </div>
        <div id='nav_nav2'>
        <i class="fa fa-bars" style={{fontSize:"24px",marginLeft:'1%',marginTop:'0.5%'}}></i>
        <label>All</label>
        <label>Sell</label>
        <label>Best Sellers</label>
        <label>Today's Deals</label>
        <label>Mobiles</label>
        <label>Customer Service</label>
        <label>Books</label>
        <label>Electronics</label>
        <label>Fashion</label>
        <select style={{backgroundColor:'rgb(53, 51, 51)',border:'none'}}>
            <option>Prime</option>
        </select>
        <label>Home and Kitchen</label>
        <label>New Releases</label>
        <label>Computers</label>
        <label>Amazon Pay</label>
        <label>Coupons</label>
        </div> 
        <div id='msg' className={css}>{msg}</div>
        <div id='payment'>
            <div id='leftPayment'>
                <div id="payForm">
                    <div>
                        <label>Card Holder's Name:</label>
                        <input type='text' ref={nameInp}/>
                    </div>
                    <div>
                        <label>Card Number:</label>
                        <input type='number' ref={cardInp}/>
                    </div>
                    <div>
                        <label>Expiry Date:</label>
                        <input type='text' ref={expInp}/>
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input type='number' ref={cvvInp}/>
                    </div>
                    <button id='conPay' onClick={payHandler}>Make Payment</button>
                    <div>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt=''/>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png' alt=''/>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png' alt=''/>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png' alt=''/>
                    </div>                    
                </div>
            </div>
            <div id='rightPayment'>
                <div id='upperDiv'>
                    <h1 id='h'>Total: ₹{props.tot}</h1>
                </div>
                <div id='lowerDiv'>
                    <img src='https://www.paisabazaar.com/wp-content/uploads/2018/08/SBI-EMV-Chip.jpg' alt=''/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment