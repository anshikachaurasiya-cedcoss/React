import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <React.Fragment>
        <Box className='footer_box'>
          <Link to={props.foot}>
            <Button sx={{backgroundColor:'#5c6ac4',height:'60%',width:'8%',color:'white',fontWeight:'800'}}>Next</Button>
          </Link>
        </Box>
    </React.Fragment>
  )
}

export default Footer