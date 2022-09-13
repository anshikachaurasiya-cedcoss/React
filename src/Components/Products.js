
import React from 'react'

const Products = (props) => {
  return (
    <div id="cart">
    {props.cart.map((item,i)=>{
        return <table id='tbl'>
            <tr>
                <td>{item[i].name}</td>
                <td>{item[i].price}</td>
                <input className='num' type='number'/>
                <td id='totalId'>{}</td>
                <td><button id='btnDel'>X</button></td>
            </tr>
        </table>
    })}
</div>
  )
}

export default Products