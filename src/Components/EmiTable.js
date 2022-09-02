import React, { Component } from 'react'

export class EmiTable extends Component {
  render() {
    if(this.props.num==='1'){
        return(
        <div id='emiTable' className={this.props.display}>
            <table>
                <tr>
                    <td>Monthly EMI</td>
                    <td>{this.props.table}</td>
                </tr>
                <tr>
                    <td>Total Interest</td>
                    <td>{this.props.totalInterest}</td>
                </tr>
                <tr>
                    <td>Total Payment</td>
                    <td>{this.props.totalPayment}</td>
                </tr>
            </table>
        </div>
        ) 
    }
    else{
        return (
        <></>
        )
    }
  }
}

export default EmiTable