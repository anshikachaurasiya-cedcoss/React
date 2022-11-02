import { Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Body = (props) => {
  return (
    <React.Fragment>
        <Box className='bodyMainBox'>
            <Box className='bodyLeft'>
                <Box className='bodyLeftUpper'>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='h5'>Marketplace</Typography>
                    <div style={{background:'#f0f2f5',height:'40px',width:'40px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
                        <SettingsIcon sx={{color:'#1c1e21'}}/>
                    </div>
                </Toolbar>
                <Toolbar>
                    <div style={{height:'40px',width:'100%',borderRadius:'20px',background:'#f0f2f5',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <i class="fa fa-search" style={{color:'#65676b',margin:'2%'}}></i>
                    <input placeholder='Search Marketplace' style={{height:'25px',width:'80%',border:'none',background:'transparent'}}/>
                    </div>
                </Toolbar>
                </Box>
                <Box className='bodyLeftLower'>
                    {props.sideItems.map((item)=>{
                        return(
                            <Toolbar><div style={{height:'35px',width:'35px',borderRadius:'20px',margin:'1%',display:'flex',justifyContent:'center',alignItems:'center',background:'#f0f2f5'}}>{item.icon}</div> {item.name}</Toolbar>
                        )
                    })}
                </Box>
            </Box>
            <Box className='bodyRight'>
                <Toolbar sx={{display:'flex',justifyContent:'space-between',paddingTop:'1%'}}>
                    <Typography variant='h5' sx={{fontWeight:'700'}}>Today's picks</Typography>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <LocationOnIcon sx={{fontSize:'20px',color:'blue'}}/>
                        <Typography sx={{color:'blue'}}>Lucknow . 60&nbsp;km</Typography>
                    </div>
                </Toolbar>
                <Box className='itemsBox'>
                    {props.items.map((item)=>{
                        return(
                            <Box className='itemBox'>
                                <img src={item.img} alt=''/>
                                <Typography sx={{fontWeight:'600',marginTop:'2%'}}>{item.price}</Typography>
                                <Typography>{item.des}</Typography>
                                <Typography sx={{fontSize:'0.8243em',color:'grey'}}>{item.city},{item.state}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}

export default Body