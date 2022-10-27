import React from 'react'
import Domain from './Domain'
import Navbar from './Navbar'

const MainPage = (props) => {
  return (
    <React.Fragment>
        <Navbar/>
        <Domain inputVal={props.inputVal} search={props.search} arr={props.arr}/>
    </React.Fragment>
  )
}

export default MainPage