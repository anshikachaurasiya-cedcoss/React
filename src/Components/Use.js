import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Use = (props) => {
  return (
    <React.Fragment>
      <Navbar link='/login'/>
        <Box className='bodyBox'>
          <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Tell us where the logo will be used</Typography>
          <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>Choose all that may apply</Typography>
          <Box className='use_boxes'>
            {props.use.map((item,i)=>{
              return(
              <Box className='use_boxes_box' onClick={props.divHandler3} index={i}>
                <div style={{display:'flex',flexDirection:'row',width:'40%',alignItems:'center'}}>
                  <img src={item.icon1} alt=''/>
                  <Typography>{item.des}</Typography>
                </div>
                <i className="fa fa-check-circle" id='tickIcon'></i>
              </Box>
              )
            })}
          </Box>
        </Box>
        <Footer foot='/logo'/>
    </React.Fragment>
  )
}

export default Use