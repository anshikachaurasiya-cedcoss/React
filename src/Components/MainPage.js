import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SignPage from './SignPage'

const MainPage = (props) => {
  return (
    <React.Fragment>
        <Navbar select={props.select}/>
        <SignPage/>
        <Footer/>
        <div className='signBelow10'></div>
    </React.Fragment>
  )
}

export default MainPage