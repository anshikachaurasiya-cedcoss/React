import React, { Component } from 'react'
import ComponentParagraph from './ComponentParagraph'
export class ComponentPara extends Component {
  render() {
    return (
    <div style={{height:300,width:800,backgroundColor:'grey',display:'flex',flexDirection:'row',margin:5}}>
            <ComponentParagraph/>
            <ComponentParagraph/>
            <ComponentParagraph/>
    </div>
    )
  }
}

export default ComponentPara