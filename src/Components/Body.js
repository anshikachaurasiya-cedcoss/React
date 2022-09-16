import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import SweetPage from './SweetPage'

const Body = (props) => {
  return (
    <>
  <div className='items'>
    <div className='list'>
    {props.match.map((records,i)=>{
      return <div className='item'><img alt='' src={records.image}/>
        <Link to='/sweet'>
        <div className='itemDetails'>
          <p id='pName'>{records.name}</p>
          <p id='pCuisine'>{records.price}</p>
          <p id='pPlace' style={{color:'yellow'}}>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </p>
        </div>
        </Link>
      </div>
        })}
    </div>
  </div>
  <Routes>
  <Route path='/sweet' element={<SweetPage/>}>SweetPage</Route>
  </Routes>
  <Outlet/>
  </>
  )
}

export default Body