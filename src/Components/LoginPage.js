import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <Navbar backHandler={props.backHandler}/>
        <Box className='bodyBox'>
        <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Add your business name</Typography>
        <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>You can change this information after your designs have been created</Typography>
            <label className='label_loginPage'>Business name (optional)</label>
            <input onChange={props.changeHandler} className='input_LoginPage'/>
            <label className='label_loginPage'>Slogan (optional)</label>
            <input onChange={props.changeHandler2} className='input_LoginPage'/>
        </Box>
    </React.Fragment>
  )
}

export default LoginPage