import { AppBar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Explore = (props) => {
  return (
    <React.Fragment>
        <AppBar>
            <Box className='themeIcon'>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/shopify-512.png' alt='' style={{height:'30px',width:'30px'}}/>
            <Typography variant='h6' sx={{fontStyle:'italic',fontWeight:'100'}}>themes</Typography>
            </Box>  
        </AppBar>
        <Box className='exloreThemes_Box'>
            <Box className='exploreThemes_BoxLeft'>
                <Typography variant='h4'>Shopify themes—<br/>built for commerce</Typography>
                <Typography variant='h6'>Take your store from launch to scale<br/> with themes that make selling easy.</Typography>
                <Button className='exploreThemesBtn' onClick={props.exploreThemesHandler}>Explore Themes</Button>
            </Box>
            <img src='https://cdn.shopify.com/shopifycloud/theme_store/assets/graphics/home_v2/hero/clothing-b83257cbc7ebfa871cf7962818a6f407f634ca6322b29fbf1ad9a28c885f39be.png' alt=''/>
        </Box>
    </React.Fragment>
  )
}

export default Explore