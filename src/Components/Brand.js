import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Brand = (props) => {
  return (
    <React.Fragment>
        <Navbar backHandler={props.backHandler}/>
        <Box className='bodyBox'>
        <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Choose your visual style</Typography>
        <Box className='box_items'>
            {props.Items.map((item)=>{
                return(
                    <Box className='item2' id='item2' onClick={props.divHandler2}>
                        <Box className='item2_box'>
                            <img src={item.image} alt=''/>
                        </Box>
                        <Typography variant='label1'>{item.des}</Typography>
                    </Box>
                )
            })}
        </Box>
        </Box>
    </React.Fragment>
  )
}

export default Brand