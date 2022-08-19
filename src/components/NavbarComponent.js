import React, { Component } from 'react'
import ProfileComponent from './ProfileComponent'
import FeedComponents from './FeedComponents'
import CornerComponent from './CornerComponent'
export class NavbarComponent extends Component {
  render() {
    return (
    <>
    <div id='navbar'>
        <p>NavBar</p>
    </div>
    <div id='bodyDiv'>
        <div id='left'>
            <ProfileComponent/>
            <ProfileComponent/>
        </div>
        <FeedComponents/>
        <CornerComponent/>
    </div>
    </>
    )
  }
}

export default NavbarComponent