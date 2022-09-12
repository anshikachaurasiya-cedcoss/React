import React from 'react'
import { Link } from 'react-router-dom'

const Web = () => {
  return (
    <div id='nav'>
      <Link to='/'>HOME</Link>
            <Link to='/cities'>CITIES</Link>
            <Link to='/drive'>DRIVE</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/partners'>PARTNERS</Link>
            <Link to='/help'>HELP</Link>
        </div>
   
  )
}

export default Web




