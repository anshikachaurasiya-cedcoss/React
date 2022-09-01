import React, { Component } from 'react'

export class Theme extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      theme:''
    }
  }
  clickHandler=(event)=>{
    this.name = event.target.getAttribute('name')
    if(this.name==='dark'){
      this.theme='black'
      this.setState({
        theme:this.theme
      })
    }
    if(this.name==='light'){
      this.theme='light'
      this.setState({
        theme:this.theme
      })
    }
    if(this.name==='party'){
      this.theme='party'
      this.setState({
        theme:this.theme
      })
    }
  }
  render() {
    return (
        <>
        Q3. Set the theme as dark, light and party on button click
        <div id='theme' className={this.theme}>
        <button onClick={this.clickHandler} name='dark'>Dark Theme</button>
        <button onClick={this.clickHandler} name='light'>Light Theme</button>
        <button onClick={this.clickHandler} name='party'>Party Theme</button>
      </div>
        </>
      
    )
  }
}

export default Theme