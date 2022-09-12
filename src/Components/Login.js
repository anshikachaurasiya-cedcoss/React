

import React, { Component } from 'react'

export class Login extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      nameIn:'',contactIn:'',passwordIn:'',inpDetails:[],message:'',text:'Sign Up',display:'block',name:''
    }
  }
  nameInp=(event)=>{
    this.setState({ message:'' })
    this.setState({ nameIn:event.target.value })
  }
  contactInp=(event)=>{
    this.setState({ message:''})
    this.setState({ contactIn:event.target.value })
  }
  passwordInp=(event)=>{
    this.setState({ message:'' })
    this.setState({ passwordIn:event.target.value })
  }
  sign=(event)=>{
    this.arr=[]
    this.state.text = event.target.innerText
    this.obj={Name:this.state.nameIn,Password:this.state.passwordIn}
      this.arr.push(this.obj)
      if(this.state.nameIn!=='' && this.state.passwordIn!==''){
        if(this.state.text ==='Sign Up'){
          this.setState({ inpDetails:this.arr })
          this.setState({
            message:'Signup Succesfully',
            text:'Log In',
            // nameIn:'',
            // contactIn:'',
            // passwordIn:'',
            display:'none'
          })
        }
        else{
          for(var i=0;i<this.state.inpDetails.length;i++){
            if(this.state.inpDetails[i].Name===this.state.nameIn && this.state.inpDetails[i].Password===this.state.passwordIn ){
              this.setState({
                message:'Login Succesfully',
                nameIn:'',
                contactIn:'',
                passwordIn:'',
              })
              this.props.count(false)
              
            }
            else{
              this.setState({
                message:'invalid credentials',
              })
            }
          }
        }
      }
      else{
        this.setState({
          message:'Fill Details'
        })
      }
  }
  render() {
    return (
    <div id="douter">
      <div id="form">
        <img src='https://cdn-icons-png.flaticon.com/512/857/857681.png' alt=''/>
        <label id='msg'>{this.state.message}</label>
        <label>Username:</label>
        <input id='nameIn' type='text' placeholder='Enter your username' onChange={this.nameInp} value={this.state.nameIn}/>
        <label className={this.state.display}>Contact Number:</label>
        <input className={this.state.display} placeholder='Enter Your number' type='number' onChange={this.contactInp} value={this.state.contactIn}/>
        <label>Password:</label>
        <input type='password' placeholder='********' onChange={this.passwordInp} value={this.state.passwordIn}/>
        <div id='btn'>
          <button onClick={this.sign}>{this.state.text}</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Login






