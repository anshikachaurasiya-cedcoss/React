import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/event'>Event</Link>
        <Link to='/Feedback'>Feedback</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar