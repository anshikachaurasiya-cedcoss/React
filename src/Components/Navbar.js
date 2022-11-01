import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';

const Navbar = (props) => {
  return (
  <React.Fragment>
    <AppBar>
      <Toolbar>
        <img src='logo.png' alt=''/>
        <Typography>shopify</Typography>
        <Box className='selectBox'>
          <Toolbar onClick={props.select}>
            <Typography variant='body2' className='select'>Start</Typography>
            <KeyboardArrowDownIcon/>
          </Toolbar>
          <div className='selectDiv'>
            <br/>
            <label>Start Your Business</label>
            <hr style={{width:'80%'}}/>
            <label>Branding</label><br/><br/>
            <label>Online Presence</label><br/><br/>
            <label>Store Set up</label>
          </div>
        </Box>
        <Box className='selectBox'>
          <Toolbar>
            <Typography variant='body2' className='select'>Sell</Typography>
            <KeyboardArrowDownIcon/>
          </Toolbar>
          <div className='SellDiv'>
            <br/>
            <label>Sell Everywhere</label>
            <hr style={{width:'80%'}}/>
            <label>Online Store</label><br/><br/>
            <label>Point of Sale</label><br/><br/>
            <label>Buy Button</label><br/><br/>
            <label>Checkout</label><br/><br/>
            <label>Sales Channels</label><br/><br/>
            <label>Wholesale Marketplace</label><br/><br/>
            <label>Custom Storefront Tools</label><br/><br/>
            <label>International Commerce</label>
          </div>
        </Box>
        <Box className='selectBox'>
          <Toolbar>
            <Typography variant='body2' className='select'>Market</Typography>
            <KeyboardArrowDownIcon/>
          </Toolbar>
          <div className='MarketDiv'>
            <br/>
            <label>Market Your Business</label>
            <hr style={{width:'80%'}}/>
            <label>Email Marketing</label><br/><br/>
            <label>Marketing Automation</label><br/><br/>
            <label>Customer Groups</label><br/><br/>
            <label>Business Chat</label><br/><br/>
            <label>Facebook Ads</label>
          </div>
        </Box>
        <Box className='selectBox'>
        <Toolbar>
          <Typography variant='body2' className='select'>Manage</Typography>
          <KeyboardArrowDownIcon/>
        </Toolbar>
        <div className='ManageDiv'>
            <br/>
            <label>Manage EveryThing</label>
            <hr style={{width:'80%'}}/>
            <label>Payments</label><br/><br/>
            <label>Balance</label><br/><br/>
            <label onClick={props.capitalHandler}>Capital</label><br/><br/>
            <label>Shipping</label><br/><br/>
            <label>Ecommerce Automation</label><br/><br/>
            <label>Fulfillment</label>
          </div>
        </Box>
        
        <Toolbar sx={{marginLeft:'10%'}}>
          <Typography variant='body2' className='select'>Pricing</Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant='body2' className='select'>Learn</Typography>
          <KeyboardArrowDownIcon/>
        </Toolbar>
        <Typography variant='body2' className='select'>Log in</Typography>
        <Button className='startBtn'>Start Free Trial</Button>
      </Toolbar>
    </AppBar>
  </React.Fragment>
  )
}

export default Navbar