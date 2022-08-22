import React, { Component } from 'react'

export class ComponentImage5 extends Component {
  render() {
    return (
      <div id='image5'>
        <img className='image' src='https://assets.entrepreneur.com/content/3x2/2000/20170720143824-image-search-phone.jpeg?auto=webp&quality=95&crop=16:9&width=675'/>
        <p style={{display:'flex',justifyContent:'center',fontSize:20,marginTop:30}}>Console</p>
        <p id='para' style={{fontSize:10,margin:10,display:'flex'}}>Lorem Learn how we're working to tackle the global oral health crisis. The incredible resilient women and children that 
            we've met inspire our ideas and every single one of them has an unspoken story worth sharing.</p>
        <button style={{color:'green',height:40,borderColor:'green',borderRadius:5,margin:'auto',marginTop:25,display:'flex'}}>Go Anywhere</button>
      </div>
    )
  }
}
export default ComponentImage5