import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='navLeft'>
            <span>APPTIO</span>
        </div>
        <div className='navRight'>
            <span>Solutions</span>
            <span>Products</span>
            <span>Resources</span>
            <span>Company</span>
            <button>Get Started</button>
            <i class="fa fa-search"></i>
            <span>Search</span>
        </div>
    </div>
  )
}

export default Nav