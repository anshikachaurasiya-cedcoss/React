import React, { Component } from 'react'
import CompleteTask from './CompleteTask'

export class IncompleteTask extends Component {
    render() {
        return (
        <>
        <div>
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                {this.props.IncompleteArr.map((data,x)=> <li><input type="checkbox" status="Incomplete" index={x} onChange={this.props.checked}/><label>{data}</label><input type="text" /><button value={data} index={x} onClick={this.props.edit} status="Incomplete">Edit</button><button index={x} status="Incomplete" onClick={this.props.delete}>Delete</button></li>)}
            </ul>
        </div>
        <CompleteTask arrComplete={this.props.arrComplete} edit={this.props.edit} delete={this.props.delete} checked={this.props.checked}/>
        </>
        )
    }
}

export default IncompleteTask