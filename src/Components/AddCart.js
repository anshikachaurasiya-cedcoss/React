import React from "react"
import Footer from "./Footer"
const AddCart = (props) => {
  return (
  <>
  <div id="cart">
    <table id='tbl'>
      {props.cart.map((item,i)=>{
        return (
        <tr>
          <td><img src={item.image} alt=''/></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <div className="btnDiv">
              <button className="btnDes" onClick={props.minus} quant={item.quantity} ind={i}>-</button>
              <input id="inp" className='num' type='number' value={item.quantity}/>
              <button className="btnDes" onClick={props.plus} quant={item.quantity} ind={i} >+</button>
            </div>
          </td>
          <td><button id='btnDel' onClick={props.del} ind={i}>X</button></td>
        </tr>
        )
      })}
    </table>
  </div>
  <Footer dis={props.dis} empty={props.empty}/>
  </>
  )
}
export default AddCart