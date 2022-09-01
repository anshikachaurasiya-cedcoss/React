import React, { Component } from 'react'

export class Theme extends Component {
  name='light'
  constructor(props) {
    super(props)
  
    this.state = {
      theme:'',
      name:this.name
    }
  }
  clickHandler=(event)=>{
    this.name = event.target.getAttribute('name')
    this.setState({
      name:this.name
    })
  }
  render() {
    if(this.state.name==='dark'){
      this.theme='black'
      this.element =(<div id='theme' className={this.theme}>
      <button onClick={this.clickHandler} name='dark'>Dark Theme</button>
      <button onClick={this.clickHandler} name='light'>Light Theme</button>
      <button onClick={this.clickHandler} name='party'>Party Theme</button>
    </div>)
    }
    if(this.state.name==='light'){
      this.theme='light'
      this.element = (<div id='theme' className={this.theme}>
      <button onClick={this.clickHandler} name='dark'>Dark Theme</button>
      <button onClick={this.clickHandler} name='light'>Light Theme</button>
      <button onClick={this.clickHandler} name='party'>Party Theme</button>
    </div>)
    }
    if(this.state.name==='party'){
      this.theme='party'
      this.element = (<div id='theme' className={this.theme}>
      <button onClick={this.clickHandler} name='dark'>Dark Theme</button>
      <button onClick={this.clickHandler} name='light'>Light Theme</button>
      <button onClick={this.clickHandler} name='party'>Party Theme</button>
    </div>)
    }
    return <>{this.element}</>
  }
}

export default Theme