import { ImportantDevices } from '@mui/icons-material'
import { AppBar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ExploreThemes = (props) => {
  return (
    <React.Fragment>
        <AppBar>
            <Box className='themeIcon'>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/shopify-512.png' alt='' style={{height:'30px',width:'30px'}}/>
            <Typography variant='h6' sx={{fontStyle:'italic',fontWeight:'100'}}>themes</Typography>
            </Box>  
        </AppBar>
        <Box className='itemsBox_Above'>
          <Typography variant='body1'>Browse all themes</Typography>
        </Box>
        <Box className='itemsBox'>
            {props.themeArr.map((item,i)=>{
              return(
                <Box className='itemBox' index={i} onClick={props.divHandler}>
                  <img src={item.img} alt='' index={i}/>
                  <Box index={i} sx={{display:'flex',flexDirection:'row !important',justifyContent:'space-evenly !important',width:'100%'}}>
                    <Typography index={i} variant='body1' sx={{fontSize:'1.2rem',fontWeight:'600'}}>{item.title}</Typography>
                    <Typography index={i} variant='body1' sx={{fontSize:'0.8rem',fontWeight:'600'}}>{item.price}</Typography>
                  </Box>
                  <Box className='itemcontentBox' index={i}>
                  <Typography variant='body2' index={i}>{item.c1}</Typography>
                  <Typography variant='body2' index={i}>{item.c2}</Typography>
                  <Typography variant='body2' index={i}>{item.c3}</Typography>
                  <Typography variant='body2' index={i}>{item.c4}</Typography>
                  <Typography variant='body2' index={i}>{item.c5}</Typography>
                  </Box>
                </Box>
              )
            })}
        </Box>
    </React.Fragment>
  )
}

export default ExploreThemes