import React, {  useState } from "react"

const Cart = (props) => {
  console.log(props.arr)
  var quant = props.arr.quantity
  console.log(quant)
  var [val,setVal]=useState(quant)
  const plusHandler=(e)=>{
    var valInp = e.target.getAttribute('value')
    val = parseInt(valInp)+parseInt(1)
    setVal(val)
  }
  const minusHandler=(e)=>{
    var valInp = e.target.getAttribute('value')
    if(val>0){
      val = parseInt(valInp)-parseInt(1)
    }
    setVal(val)
  }
   
  return (
  <> 
  <button onClick={props.btn} id='backBtn'>Back</button>
  <div id="cartDiv">
    <table id='tbl'>
        <tr><th>Id</th><th>Image</th><th>Name</th><th>Price</th><th>Quantity</th></tr>
      {Object.keys(props.arr).map((item,i)=>{
        return (
        <tr ind={i}>
          <td>{item.id}</td>
          <td><img src={item.image} alt=''/></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td style={{height:'98%',display:'flex',alignItems:'center'}}>
            <button onClick={minusHandler} value={val} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'lightblue',color:'dodgerblue'}}>-</button>
            <p style={{width:'40px'}}>{val}</p>
            <button onClick={plusHandler} value={val} style={{width:'30%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'lightblue',color:'dodgerblue'}}>+</button>
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