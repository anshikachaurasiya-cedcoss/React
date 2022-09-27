import React from 'react'
import { Link } from 'react-router-dom'
import Body from './Body'

const MainPage = (props) => {

    return (
    <>
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='iconDiv'>
                <img src='iconToy.png' alt=''/>
                <span>Hello, User</span>|<span>Accounts and Details</span>
            </div>
        </div>
        <div id='searchDiv'>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={props.click}>Search</button>
            </div>
        </div>
        <marquee behavior="scroll" direction="left" style={{color:'dodgerblue'}}>
        <i class="fa fa-thumbs-up"></i>
        <i>We worry about what a child will become tomorrow, yet we forget that he is someone today...</i>
        <i class="fa fa-thumbs-up"></i>
        </marquee>
    </div> 
    <Body match={props.match} div={props.div}/>
    </>
  )
}

export default MainPage

