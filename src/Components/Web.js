

import React from 'react'
import { Link } from 'react-router-dom'
import BodyDiv from './BodyDiv'
import FooterDiv from './FooterDiv'

const Web = () => {
  return (
    <div id='web'>
        <div id='nav'>
            <Link to='/'>CITIES</Link>
            <Link to='/drive'>DRIVE</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/partners'>PARTNERS</Link>
            <Link to='/help'>HELP</Link>
        </div>
        <BodyDiv/>
        <FooterDiv/>
    </div>
  )
}

export default Web




