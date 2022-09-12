import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <div id='web'>
    <div id='bodyDiv'>
      <div id='nav2'>
        <div id='fac'>
          <i class="fa fa-facebook-f"></i>
        </div>
        <div id='ins'>
          <i class="fa fa-instagram"></i>
        </div>        
      </div>
    </div>
    <div id='footer'>
      <h2><Link to='/'>01 EduCADD Authorised Training centre</Link></h2>
    </div>
  </div>
  )
}

export default Home