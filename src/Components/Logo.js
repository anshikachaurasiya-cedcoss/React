import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Logo = (props) => {
  return (
    <React.Fragment>
      <Navbar backHandler={props.backHandler}/>
      <Box className='bodyBox'>
        <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>We made these logos for you</Typography>
        <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>Choose one to start editing. You can pick a different logo anytime.</Typography>
        <Box className='logo_boxes'>
          {props.style.map((item)=>{
            return(
              <Box className={`logo_box ${item.img}`}>
                <button className='editBtn'>Edit Logo</button>
              </Box>
            )
          })}
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Logo