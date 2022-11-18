import React from 'react'
import propTypes from 'prop-types'

const CompB = (props) => {
  return (
    <div style={{marginLeft:'10%',alignItems:'center',display:'flex'}}>
        <table>
            <tr><th>Type</th><th>Class</th><th>Example</th></tr>
            <tr><td><strong>String</strong></td><td>Proptype.string</td><td>{props.name}</td></tr>
            <tr><td><strong>Object</strong></td><td>Proptype.object</td><td>{props.obj.lastname}</td></tr>
            <tr><td><strong>Number</strong></td><td>Proptype.number</td><td>{props.num}</td></tr>
            <tr><td><strong>Boolean</strong></td><td>Proptype.bool</td><td>{props.bool}</td></tr>
            <tr><td><strong>Function</strong></td><td>Proptype.func</td><td>{props.func}</td></tr>
            <tr><td><strong>Symbol</strong></td><td>Proptype.symbol</td><td>{props.symbol}</td></tr>
        </table>
    </div>
  )
}
CompB.propTypes={
    name:propTypes.string,
    obj:propTypes.object,
    num:propTypes.number,
    bool:propTypes.bool,
    func:propTypes.func,
    symbol:propTypes.symbol
}

export default CompB