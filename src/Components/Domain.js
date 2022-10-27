import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Domain = (props) => {
  return (
    <React.Fragment>
        <Box className='domain_box'>
            <Typography variant='h3' className='domainBox_h3'>Find the perfect domain name</Typography>
        </Box>
        <Box className='input_Box'>
            <input placeholder='Enter your Domain Name idea (e.g. shopify.com)' ref={props.inputVal}/>
            <Button onClick={props.search}>Search Available Domains</Button>
        </Box>
        <img src='1.png' alt='' className='img1'/>
    </React.Fragment>
  )
}

export default Domain