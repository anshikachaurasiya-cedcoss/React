import React, { Component } from 'react'
export class Product1Component extends Component {
  render() {
    return (
    <div className='products'>
      <img src={this.props.prd.image} alt=''/>
      <h3>Product{this.props.prd.id}</h3>
      <span>Price ${this.props.prd.price}</span>
      <button className='btnCart'>Add To Cart</button>
    </div>
    )
  }
}

export default Product1Component