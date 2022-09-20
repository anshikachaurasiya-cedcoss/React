import React, {  useState } from "react"

const Cart = (props) => {
    var [val,setVal]=useState('0')
    const plusHandler=(e)=>{
        var valInp = e.target.getAttribute('val')
        val = parseInt(valInp)+parseInt(1)
        setVal(val)
    }
    const minusHandler=(e)=>{
      var valInp = e.target.getAttribute('val')
        if(val>0){
          val = parseInt(valInp)-parseInt(1)
        }
        setVal(val)
    }
  return (
  <>
  <div id="cartDiv">
    <table id='tbl'>
      {props.arr.map((item,i)=>{
        return (
        <tr>
          <td><img src={item.image} alt=''/></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td style={{height:'97%',display:'flex',alignItems:'center'}}>
              <button onClick={minusHandler} val={val} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'antiquewhite',color:' rgb(218, 165, 32)'}}>-</button>
              <p style={{width:'40px'}}>{val}</p>
              <button onClick={plusHandler} val={val} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'antiquewhite',color:' rgb(218, 165, 32)'}}>+</button>
          </td>
        </tr>
        )
      })}
    </table>
  </div>
  </>
  )
}
export default Cart