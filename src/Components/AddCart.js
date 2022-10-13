import React from "react"
import Footer from "./Footer"
const AddCart = (props) => {
    let Grandtotal=0
  return (
  <>
  <div id="cart">
    <table id='tbl'>
      {props.cart.map((item,i)=>{
        Grandtotal+=item.quantity*item.price
        return (
        <tr>
          <td ><img src={item.image} alt=''/></td>
          <td style={{color:'rgb(146, 182, 214)'}}>{item.name}</td>
          <td style={{color:'rgb(146, 182, 214)'}}>{item.price}</td>
          <td >
            <div className="btnDiv">
              <button style={{color:'rgb(146, 182, 214)',backgroundColor:'white'}} className="btnDes" onClick={props.minusHandler} quant={item.quantity} ind={i}>-</button>
              <input style={{color:'rgb(146, 182, 214)',backgroundColor:'white'}} id="inp" className='num' type='number' value={item.quantity}/>
              <button style={{color:'rgb(146, 182, 214)',backgroundColor:'white'}} className="btnDes" onClick={props.plusHandler} quant={item.quantity} ind={i} >+</button>
            </div>
          </td>
          <td style={{color:'rgb(146, 182, 214)'}}>Total- {item.quantity*item.price}</td>
          <td style={{backgroundColor:'rgb(243, 67, 67)'}}>
            <button style={{color:'white',backgroundColor:'rgb(243, 67, 67)'}} id='btnDel' onClick={props.deleteHandler} ind={i} >X</button>
          </td>
        </tr>
        )
      })}
    </table>
    
  </div>
  <Footer display={props.display} Grandtotal={Grandtotal} dis={props.dis} emptyHandler={props.emptyHandler} />
  </>
  )
}
export default AddCart