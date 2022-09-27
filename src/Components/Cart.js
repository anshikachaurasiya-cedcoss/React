import React from "react"
import { Link } from "react-router-dom"

const Cart = (props) => {
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
          <td style={{height:'98%',display:'flex',alignItems:'center'}}>
            <button onClick={props.minus} ind={i} value={item.quantity} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'lightblue',color:'dodgerblue'}}>-</button>
            <p style={{width:'40px'}}>{item.quantity}</p>
            <button onClick={props.plus} ind={i} value={item.quantity} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'lightblue',color:'dodgerblue'}}>+</button>
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