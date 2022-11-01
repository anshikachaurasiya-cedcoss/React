import { AppBar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ThemeDescriptionPage = (props) => {
    console.log(props.newArr)
  return (
    <React.Fragment>
        <AppBar>
            <Box className='themeIcon'>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/shopify-512.png' alt='' style={{height:'30px',width:'30px'}}/>
            <Typography variant='h6' sx={{fontStyle:'italic',fontWeight:'100'}}>themes</Typography>
            </Box>  
        </AppBar>
        <Box className='description_mainBox'>
            <Box className='descriptionLeft'>
                 <Typography variant='body1' sx={{margin:'2%',fontSize:'1.8rem',fontWeight:'700'}}>{props.newArr.title}</Typography>
                 <Typography variant='body2' sx={{margin:'2%',textDecoration:'Underline',color:'#008060'}}>By {props.newArr.author}</Typography>
                 <label style={{margin:'2%',color:'grey'}}>{props.newArr.des}</label>
                 <label style={{margin:'2%',fontWeight:'700'}}>INCLUDES SUPPORT FOR:</label>
                 <span style={{fontSize:'0.8125em',color:'grey',marginLeft:'2%',marginTop:'1%'}}>{props.newArr.c1}</span>
                 <span style={{fontSize:'0.8125em',color:'grey',marginLeft:'2%',marginTop:'1%'}}>{props.newArr.c2}</span>
                 <span style={{fontSize:'0.8125em',color:'grey',marginLeft:'2%',marginTop:'1%'}}>{props.newArr.c3}</span>
                 <span style={{fontSize:'0.8125em',color:'grey',marginLeft:'2%',marginTop:'1%'}}>{props.newArr.c4}</span>
                 <span style={{fontSize:'0.8125em',color:'grey',marginLeft:'2%',marginTop:'1%'}}>{props.newArr.c5}</span>
                 <label style={{fontSize:'1.5rem',marginLeft:'2%',marginTop:'5%'}}>{props.newArr.price}</label>
                 <div>
                    <Button sx={{height:'60px',width:'30%',color:'white',border:'none',backgroundColor:'#008060',fontWeight:'600',margin:'2%'}}>Try theme</Button>
                    <Button sx={{height:'60px',width:'40%',color:'#008060',border:'2px solid #008060',margin:'2%',fontWeight:'600'}}>View Demo store</Button>
                 </div>
                 <label style={{margin:'2%'}}>Unlimited free trial. Pay if you publish.</label>
            </Box>
            <img src={props.newArr.img} alt='' style={{width:'55%',border:'1px solid #d2d5d9',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}/>
        </Box>
    </React.Fragment>
  )
}

export default ThemeDescriptionPage