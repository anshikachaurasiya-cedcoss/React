import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SignPage = () => {
  return (
    <React.Fragment>
        <Box className='SignPage'>
            <div className='SignPageLeft'>
                <h1>If you can dream it, you can sell it with Shopify</h1>
                <p>Build your business here. Take it anywhere.</p>
                <div>
                    <input placeholder='Enter Your email address'/>
                    <Button>Start Free Trial</Button>
                </div>
                <label>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</label>
            </div>
            <div className='SignPageRight'>
            </div>
        </Box>
        <div className='signBelow'></div>
        <div className='signBelow1'></div>
        <div className='signBelow2'></div>
        <div className='signBelow3'></div>
        <div className='signBelow4'></div>
        <div className='signBelow5'></div>
        <div className='signBelow6'></div>
        <div className='signBelow7'></div>
        <div className='signBelow8'></div>
        <div className='signBelow9'></div>
    </React.Fragment>
  )
}

export default SignPage