import React, { Component } from 'react'

export class Theme extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      theme:''
    }
  }
    darkTheme=()=>{
      this.theme='black'
      this.setState({
        theme:this.theme
      })
    }
    lightTheme=()=>{
      this.theme='light'
      this.setState({
        theme:this.theme
      })
    }
    partyTheme=()=>{
      this.theme='party'
      this.setState({
        theme:this.theme
      })
    }
  render() {
    return (
        <>
        Q3. Set the theme as dark, light and party on button click
        <div id='theme' className={this.theme}>
        <button onClick={this.darkTheme} >Dark Theme</button>
        <button onClick={this.lightTheme}>Light Theme</button>
        <button onClick={this.partyTheme}>Party Theme</button>
      </div>
        </>
      
    )
  }
}

export default Theme