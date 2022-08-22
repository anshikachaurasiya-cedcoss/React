import React, { Component } from 'react'

export class ComponentParagraph extends Component {
  render() {
    return (
      <div style={{height:'auto',margin:5,width:300,display:'flex',flexDirection:'column',backgroundColor:'whitesmoke'}}>
        <p style={{display:'flex',justifyContent:'center',fontSize:20,marginTop:30}}>Console</p>
        <p id='para' style={{fontSize:12,margin:10,display:'flex'}}>Lorem Learn how we're working to tackle the global oral health crisis. The incredible resilient women and children that 
            we've met inspire our ideas and every single one of them has an unspoken story worth sharingwe've met inspire our ideas and every single one of them has an unspoken story worth shari
            we've met inspire our ideas and every single one of them has an unspoken story worth shari.</p>
        <button style={{color:'green',height:40,borderColor:'green',borderRadius:5,margin:'auto',marginTop:25,display:'flex'}}>Go Anywhere</button>
      </div>
    )
  }
}

export default ComponentParagraph