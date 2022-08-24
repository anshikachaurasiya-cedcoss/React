import React from 'react'
import ProfileBlue from './ProfileBlue'
import FeedBlue from './FeedBlue'
import CornerBlue from './CornerBlue'
const NavbarBlue=()=> {
  return (
    <>
    <div id='navbar'>
        <p>NavBar</p>
    </div>
    <div id='bodyDiv'>
        <div id='left'>
            <ProfileBlue/>
            <ProfileBlue/>
        </div>
        <FeedBlue/>
        <CornerBlue/>
    </div>
    </>
    )
}

export default NavbarBlue