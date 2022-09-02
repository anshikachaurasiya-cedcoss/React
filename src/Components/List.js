import React, { Component } from 'react'

export class List extends Component {
    fruits=['Mango','Banana','Litchi','Guava']
  render() {
    return (
      <div>
        <h3>Fruits list</h3>
        <ul>
            {this.fruits.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default List