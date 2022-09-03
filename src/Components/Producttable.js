import React, { Component } from 'react'

export class Producttable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pId:'',pName:'',pPrice:'',data:[]
    }
  }
  idVal=(event)=>{
    this.setState({
      pId:event.target.value
    })
  }
  nameVal=(event)=>{
    this.setState({
      pName:event.target.value
    })
  }
  priceVal=(event)=>{
    this.setState({
      pPrice:event.target.value
    })
  }
  add=()=>{
    this.state.data.push({ID:this.state.pId,NAME:this.state.pName,PRICE:this.state.pPrice})
    this.setState({data:this.state.data},()=>{
        this.setState({
            pId:'',pName:'',pPrice:''
        })
    })
  }
  render() {
    
    return (
      <>
      <div id='products'>
        <div>
          <span>Product Id</span>
          <input type='number' onChange={this.idVal} value={this.state.pId}/>
        </div>
        <div>
          <span>Product Name</span>
          <input type='text' onChange={this.nameVal} value={this.state.pName}/>
        </div>
        <div>
          <span>Product Price</span>
          <input type='number' onChange={this.priceVal} value={this.state.pPrice}/>
        </div>
        <button onClick={this.add}>Add Product</button>
      </div>
      <div id='table'>
        <table>
          {this.state.data.map((item)=> <tr><td>{item.ID}</td><td>{item.NAME}</td><td>{item.PRICE}</td></tr> )}
        </table>
      </div>
      </>
    )
  }
}

export default Producttable