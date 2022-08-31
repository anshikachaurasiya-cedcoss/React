import React, { Component } from 'react'

export class CompleteTask extends Component {
   
    render() {
        return (
        <div>
            <h3>Completed</h3>
            <ul id='completed-tasks'>
                {this.props.arrComplete.map((data,x)=> <li><input type="checkbox" index={x} status="Complete" onClick={this.props.checked} checked/><label>{data}</label><input type="text" /><button value={data} index={x} onClick={this.props.edit} status="Complete">Edit</button><button index={x} status="Complete" onClick={this.props.delete}>Delete</button></li>)}
            </ul>
        </div>
        )
    }
}

export default CompleteTask