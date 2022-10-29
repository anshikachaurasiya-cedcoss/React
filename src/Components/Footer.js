import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = (props) => {
  return (
    <React.Fragment>
        <Box className='footer_box'>
            <Button sx={{backgroundColor:'#5c6ac4',height:'60%',width:'8%',color:'white',fontWeight:'800'}} onClick={props.nextHandler}>{props.next}</Button>
        </Box>
    </React.Fragment>
  )
}

export default Footer