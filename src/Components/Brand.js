import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Brand = (props) => {
  return (
    <React.Fragment>
        <Navbar/>
        <Box className='brandBox'>
            <Typography variant='h3'>Search results for <label style={{fontWeight:'800',textTransform:'uppercase'}}>{props.inputVal.current.value}</label></Typography>
            <Typography variant='body2'>Choose a domain and follow the steps to create your store</Typography>
            <h3>MOST POPULAR DOMAIN NAME</h3>
            {props.arr.unavailable.map((item)=>{
              return <p className='para'>{item}<label>Unavailable</label></p>
            })}
            <hr style={{border:'0.3px regid #cfcccc',width:'70%'}}/>
            <h3>OTHER DOMAIN NAMES</h3>
            {props.arr.available.map((item)=>{
              return <p className='para'>{item}<label>$14 USD/year<i class='far fa-arrow-alt-circle-right'></i></label></p>
            })}
        </Box>
    </React.Fragment>
  )
}

export default Brand