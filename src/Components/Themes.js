import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Themes = (props) => {
  return (
    <React.Fragment>
        <Navbar/>
        <Box className='navbar_below'>
            <Typography variant='label1' className='navbar_below_labels'>Shopify Online store</Typography>
            <Typography variant='label1' className='navbar_below_labels'>|</Typography>
            <Typography variant='label1' className='navbar_below_labels'>Overview</Typography>
            <Typography variant='label1' className='navbar_below_labels'>Examples</Typography>
            <Typography variant='label1' className='navbar_below_labels'>Themes</Typography>
        </Box>
        <img src='1.png' alt='' style={{width:'100%'}}/>
        <Box className='img_box'>
            <img style={{height:'90%',width:'80%',borderRadius:'7px'}} src='2.png' alt=''/>
        </Box>
        <img src='3.png' alt='' style={{width:'100%'}}/>
        <Box className='btnImg_box'>
            <Typography variant='h2' sx={{fontSize:'1.2em'}}>Discover free and paid themes created by world-<br/>class designers in the Shopify Theme Store</Typography>
            <Button className='btnExplore' onClick={props.exploreHandler}>Explore All Themes</Button>
            <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/online/themes/theme-store-small-a6ac989dcbd7ce2b91b079e10792a9cff26eb419fafdbcea17599e14384b4585.png' alt='' className='img_explore'/>
        </Box>
        <Box className='freeTrial_box'>
            <Typography variant='h5' sx={{color:'#004c3f'}}>Start your business journey with Shopify</Typography>
            <Typography variant='h5' sx={{color:'grey'}}>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</Typography>
            <Button className='freeBtn'>Start free trial</Button>
        </Box>
        <img src='4.png' alt='' style={{width:'100%'}}/>
        <img src='5.png' alt='' style={{width:'100%'}}/>
        <img src='6.png' alt='' style={{width:'100%'}}/>
    </React.Fragment>
  )
}

export default Themes