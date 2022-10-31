import { Box } from '@mui/system'
import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import { Typography } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Edit = (props) => {
  return (
    <React.Fragment>
      <Navbar link='/logo'/>
      <Box className='edit_mainBox'>
        <Box className='edit_mainBox_left'>
          <Box className='edit_mainBox_left1'>
            <div className='box_div'>
              <DriveFileRenameOutlineIcon/>
              <Typography sx={{fontSize:'0.9rem'}}>NAME</Typography>
            </div>
            <div className='box_div'>
              <FontDownloadIcon/>
              <Typography sx={{fontSize:'0.9rem'}}>FONT</Typography>
            </div>
            <div className='box_div'>
              <ColorLensIcon/>
              <Typography sx={{fontSize:'0.9rem'}}>COLORS</Typography>
            </div>
            <div className='box_div'>
              <FilterFramesIcon/>
              <Typography sx={{fontSize:'0.9rem'}}>FRAMES</Typography>
            </div>
          </Box>
          <Box className='edit_mainBox_left2'>
            <div className='left2_div'>
              <Typography variant='label1' sx={{fontSize:'1.4rem'}}>Business name (optional)</Typography>
              <input value={props.business} onChange={props.changeHandler}/>
            </div>
            <div className='left2_div'>
              <Typography variant='label1' sx={{fontSize:'1.4rem'}}>Slogan (optional)</Typography>
              <input value={props.slogan} onChange={props.changeHandler2}/>
            </div>
          </Box>
        </Box>
        <Box className={`edit_mainBox_right`} >
          <div className='imgDiv' id={props.img}>
            <p className={props.sty}>{props.business}</p>
            <p className={props.sty}>{props.slogan}</p>
          </div>
        </Box>
      </Box>
      <Footer foot='/preview'/>
    </React.Fragment>
  )
}

export default Edit