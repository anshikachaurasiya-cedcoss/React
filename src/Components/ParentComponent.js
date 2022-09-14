import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Anshika'
      }
    }
   componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'Anshika'
        })
    },2000)
   }
  render() {
    console.log("//// Parent Component ///////")
    return (
      <div>
        <ChildComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent