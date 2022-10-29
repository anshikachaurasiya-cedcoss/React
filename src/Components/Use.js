import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Navbar from './Navbar';

const Use = (props) => {
  return (
    <React.Fragment>
      <Navbar backHandler={props.backHandler}/>
        <Box className='bodyBox'>
          <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Tell us where the logo will be used</Typography>
          <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>Choose all that may apply</Typography>
          <Box className='use_boxes'>
            {props.use.map((item,i)=>{
              return(
              <Box className='use_boxes_box' onClick={props.divHandler3} index={i}>
                <div style={{display:'flex',flexDirection:'row',width:'40%',alignItems:'center'}}>
                  <img src={item.icon1} alt=''/>
                  <Typography>{item.des}</Typography>
                </div>
                <TaskAltIcon sx={{fontSize:'35px',color:'grey',marginRight:'2%'}} id='circleIcon'/>
              </Box>
              )
            })}
          </Box>
        </Box>
    </React.Fragment>
  )
}

export default Use