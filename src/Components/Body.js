import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Body = (props) => {
  return (
    <React.Fragment>
        <Navbar/>
        <Box className='bodyBox'>
            <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Choose your business space</Typography>
            <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>This helps us create better designs</Typography>
            <Box className='box_items'>
                {props.items.map((item,i)=>{
                    return(
                    <Box className='item' onClick={props.divHandler} index={i} id='item'>
                        <Box className='box_img'>
                            <img src={item.image} alt='' style={{height:'90%',width:'95%'}}/>
                        </Box>
                        <Typography variant='label1' sx={{color:'rgb(26 28 29)',margin:'20px',fontSize:'1.2rem'}}>{item.des}</Typography>
                    </Box>
                    )
                })}
            </Box>
        </Box>
        <Footer foot='/brand'/>
    </React.Fragment>
  )
}

export default Body