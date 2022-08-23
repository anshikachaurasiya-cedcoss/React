import React, { Component } from 'react'

export class Component1 extends Component {
  render() {
    return (
      <div id='Component1'>
        <img src='data:image/png;base64,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'/>
        <div id='searchbarInput'>
          <input type={"text"} placeholder="Search for Products, Brands and more" style={{width:300,height:20,float:'left',border:'none'}}/>
          <i class="fa fa-search" style={{float:'right',color:'rgb(70,70,236)'}}></i>
        </div>
        <button style={{height:20,width:70,border:'none',margin:10,color:'blue'}}>Login</button>
        <label style={{margin:12,fontSize:15}}>Become a seller</label>
        <select style={{border:'none',backgroundColor:'rgb(70, 70, 236)',color:'white',margin:10}}><option>More</option></select>
        <div id='cartDiv'>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <label style={{margin:10}}>Cart</label>
        </div>
      </div>
    )
  }
}

export default Component1