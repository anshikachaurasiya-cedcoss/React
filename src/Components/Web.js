import React from 'react'
import { Link } from 'react-router-dom'

const Web = () => {
  return (
    <div id='nav'>
      <Link to='/'>HOME</Link>
      <Link to='/select'>
        <select>
          <option>SELECT PRODUCTS</option>
          <option>High Products</option>
          <option>Valuable Products</option>
        </select>
      </Link>
      <Link to='/contact'>CONTACT US</Link>
    </div>
  )
}

export default Web