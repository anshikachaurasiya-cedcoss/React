import React from 'react'
import { Link } from 'react-router-dom'

const SweetPage = (props) => {
    
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
                    <div>
                        <label style={{color:'red'}}>Save Extra</label>&nbsp;
                        <label>with 4 offers</label><br/>
                        <label style={{color:'red'}}>Cashback (3):</label>&nbsp;
                        <label>Amazon Pay Reward: Get ₹400 cashback as </label>
                        <label>Amazon Pay balance on minimum order of ₹4,000 in…</label>
                    </div>
                    <div id='imgDiv'>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt=''/>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png' alt=''/>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png' alt=''/>
                    </div>
                </div> 
            </div>
            )
        })}
    </div>
    </>
    )
}

export default SweetPage