import React, { Component } from 'react'
import IncompleteTask from './IncompleteTask'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        input:'',
        IncompleteArr:[],
        upd:'Add',
        status:'',
        arrComplete:[]
      }
    }
    getInputVal=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    addBtn=(event)=>{
        this.btn=event.target.innerHTML
        if(this.btn==="Add"){
            if(this.state.input!==""){
                this.state.IncompleteArr.push(this.state.input);
                this.setState({
                input:""
                })
            }
        }
        else
        {
            if(this.state.input!==""){
                if(this.state.status==="Incomplete"){
                    this.state.IncompleteArr[this.ind]=this.state.input;
                    this.setState({
                        input:""
                    })
                    this.setState({
                        upd:"Add"
                    })
                }
                else{
                    this.state.arrComplete[this.ind]=this.state.input;
                    this.setState({
                        input:""
                    })
                    this.setState({
                        upd:"Add"
                    })
                }
            }
        }
    }
    edit=(event)=>{
        this.ind=parseInt(event.target.getAttribute('index'))
        this.val=event.target.getAttribute('value')
        this.setState({
            input :this.val
        })
        this.setState({
            upd:"Update"
        })
        this.setState({
            status:event.target.getAttribute('status')
        })
    }
    delete=(event)=>{
        this.status=event.target.getAttribute('status')
        this.setState({
            status:this.status
        })
        if(this.status==="Incomplete"){
            this.delIncomplete=event.target.getAttribute('index')
            this.state.IncompleteArr.splice(this.delIncomplete,1)
            this.setState({
                IncompleteArr:this.state.IncompleteArr
            })
        }
        else{
            this.delComplete=event.target.getAttribute('index')
            this.state.arrComplete.splice(this.delComplete,1)
            this.setState({
                arrComplete:this.state.arrComplete
            })
        }
    }
    clickedCheck=(event)=>{
        this.status=event.target.getAttribute('status')
        this.setState({
            status:this.status
        })
        if(this.status==="Incomplete"){
            this.check=parseInt(event.target.getAttribute('index'))
            this.state.arrComplete.push(this.state.IncompleteArr[this.check]);
            this.state.IncompleteArr.splice(this.check,1)
            this.setState({
                IncompleteArr:this.state.IncompleteArr
            })
            event.target.checked=false
        }
        else{
            this.check=event.target.getAttribute('index')
            this.state.IncompleteArr.push(this.state.arrComplete[this.check])
            this.state.arrComplete.splice(this.check,1)
            this.setState({
                arrComplete:this.state.arrComplete
            })
        }
    }
    
    render() {
        return (
        <>
        <div id='ComponentA'>
            <p>
                <input id="new-task" type="text" value={this.state.input} onChange={this.getInputVal}/>
                <button status={this.state.status} onClick={this.addBtn}>{this.state.upd}</button>
            </p>
        </div>
        <IncompleteTask IncompleteArr={this.state.IncompleteArr} arrComplete={this.state.arrComplete} checked={this.clickedCheck} edit={this.edit} delete={this.delete} completearr={this.state.arrcomplete}/>
        </>
        )
    }
}

export default ComponentA