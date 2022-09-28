import React from "react"
import { Link } from "react-router-dom"

const Cart = (props) => {
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
  <div id="cartDiv">
    <table id='tbl'>
        <tr><th>Id</th><th>Image</th><th>Name</th><th>Price</th><th>Quantity</th></tr>
      {props.arr.map((item,i)=>{
        return (
        <tr ind={i}>
          <td>{item.id}</td> 
          <td><img src={item.image} alt=''/></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td style={{height:'98%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px'}}>
            <button onClick={props.minus} ind={i} value={item.quantity} style={{width:'20%',height:'40px',fontSize:'2rem',border:'none',backgroundColor:'orange'}}>-</button>
            <p style={{width:'40px'}}>{item.quantity}</p>
            <button onClick={props.plus} ind={i} value={item.quantity} style={{width:'20%',height:'40px',fontSize:'2rem',border:'none',backgroundColor:'orange'}}>+</button>
          </td>
        </tr>
        )
      })}
    </table>
    <img src="des1.png" alt="" style={{marginTop:'5%'}}/>
  </div>
  </>
  )
}
export default Cart