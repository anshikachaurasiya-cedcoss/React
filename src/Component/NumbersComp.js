import React, { Component } from 'react'

export class NumbersComp extends Component {
  render() {
    return (
        <div id="divNum">
        <div className="d1">
            <button name='7' onClick={this.props.click} className="b1">7</button>
            <button name='8' onClick={this.props.click} className="b1">8</button>
            <button name='9' onClick={this.props.click} className="b1">9</button>
            <button name='/' onClick={this.props.click} className="b1">/</button>
        </div>
        <div className="d1">
            <button name='4' onClick={this.props.click} className="b1">4</button>
            <button name='5' onClick={this.props.click} className="b1">5</button>
            <button name='6' onClick={this.props.click} className="b1">6</button>
            <button name='*' onClick={this.props.click} className="b1">*</button>
        </div>
        <div className="d1">
            <button name='1' onClick={this.props.click} className="b1">1</button>
            <button name='2' onClick={this.props.click} className="b1">2</button>
            <button name='3' onClick={this.props.click} className="b1">3</button>
            <button name='-' onClick={this.props.click} className="b1">-</button>
        </div>
        <div className="d1">
            <button name='0' onClick={this.props.click} className="b1">0</button>
            <button name='.' onClick={this.props.click} className="b1">.</button>
            <button name='=' onClick={this.props.calculate} className="b1">=</button>
            <button name='+' onClick={this.props.click} className="b1">+</button>
        </div>
    </div>
    )
  }
}

export default NumbersComp