import React, { Component } from 'react'
import EmiBody from './EmiBody'

export class EmiCalculator extends Component {
  render() {
    return (
      <div id='emiCalculator'>
        <div id='header'>
            <img src='http://cdn.onlinewebfonts.com/svg/img_422593.png' alt=''/>
            <label>EMI Calculator</label>
            <img src='https://cdn-icons-png.flaticon.com/512/483/483590.png' alt=''/>
        </div>
        <EmiBody/>
      </div>
    )
  }
}

export default EmiCalculator