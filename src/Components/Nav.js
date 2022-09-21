import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <div id='nav'>
    <img src='blog.png' alt=''/>
    <span><i>Blogger</i></span>
    <Link to='/home'>HOME</Link>
    <Link to='/blog'>BLOG</Link>
    <Link to='/help'>HELP</Link>
  </div>
  )
}

export default Nav