import { AppBar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return(
  <React.Fragment>
    <AppBar>
      <Box className='appbar_box'>
        <Box sx={{width:'20%',display:'flex',alignItems:'center'}}>
          <Link to={props.link}>
          <Button onClick={props.backHandler}>
            <ArrowBackIcon className='arrowIcon'/>&nbsp;&nbsp;
            <Typography variant='body1' sx={{color:'#212b36'}}>BACK</Typography>
          </Button>   
          </Link>             
        </Box>
        <Box sx={{height:'100%',width:'5%',display:'flex',alignItems:'center'}}>
          <img style={{height:'40px',width:'40px'}} src='https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/840babff8c7009ac167142cb459dfe8d.svg' alt=''/>
        </Box>
        <Box sx={{height:'100%',width:'20%',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <Button sx={{color:'#5c6ac4',fontWeight:'800'}}>LOGIN</Button>
          <Button sx={{color:'#5c6ac4',fontWeight:'800',border:'2px solid #5c6ac4',width:'100px'}}>Sign Up</Button>
        </Box>
      </Box>
    </AppBar>
  </React.Fragment>
  )
}

export default Navbar