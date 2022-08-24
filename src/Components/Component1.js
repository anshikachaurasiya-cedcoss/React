import React from 'react'
import Component2 from './Component2'

const Component1=()=> {
  return (
    <>
      <div id='Component1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65buwZ6L99zb6qtZXNiuWI3OflsY7cNjRDz1414a60oGbkz3J3D_wXLOTGeMLR9ZOTRE&usqp=CAU'/>
        <div id='searchbarInput'>
          <input type={"text"} placeholder="Search for Products, Brands and more" style={{width:300,height:20,float:'left',border:'none'}}/>
          <i class="fa fa-search" style={{float:'right',color:'rgb(36, 117, 240)',margin:3}}></i>
        </div>
        <button style={{height:25,width:85,border:'none',margin:10,color:'rgb(36, 117, 240)',backgroundColor:'white'}}>Login</button>
        <label style={{margin:12,fontSize:15}}>Become a seller</label>
        <select style={{border:'none',backgroundColor:'rgb(36, 117, 240)',color:'white',margin:10,fontWeight:600}}><option>More</option></select>
        <div id='cartDiv'>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <label style={{margin:10}}>Cart</label>
        </div>
      </div>
      <div>
        <Component2/>
      </div>
      </>
  )
}

export default Component1