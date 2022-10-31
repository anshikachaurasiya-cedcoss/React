import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Preview = (props) => {
  return (
    <React.Fragment>
      <Navbar link='/edit'/>
      <Box className='bodyBox'>
      <Typography variant='h3' sx={{color:'#212b36',margin:'5px'}}>Congratulations on your new logo</Typography>
      <Typography variant='h5' sx={{color:'#8b8f94',margin:'15px'}}>Download your free logos now</Typography>
      <Box className='preview_mainBox'>
        <Box className='peview_upper'>
          <div className='imgDiv2' id={props.img}>
            <p className={props.sty}>{props.business}</p>
            <p className={props.sty}>{props.slogan}</p>
          </div>
          <div className='contentdiv'>
            <label style={{margin:'2%',fontSize:'1.2rem'}}>Included in all logo packages</label>
            <div className='contentdivLower'>
              <div style={{display:'flex',flexDirection:'column'}}>
                <label>High resolution logo with unlimited revisions</label>
                <label>Favicon</label>
                <label>Facebook profile image</label>
                <label>Facebook cover photo (two variations)</label>
                <label>Instagram profile image</label>
                <label>Twitter profile image</label>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <label>Twitter banner (two variations)</label>
                <label>Pinterest profile image</label>
                <label>Pinterest board photo</label>
                <label>LinkedIn profile image</label>
                <label>LinkedIn profile banner (two variations)</label>
                <label>YouTube profile image</label>
              </div>
            </div>
          </div>
        </Box>
        <button className='downloadBtn' style={{border:'none',borderRadius:'5px',backgroundColor:'#5c6ac4',height:'12%',width:'20%',color:'white',fontWeight:'800',fontSize:'1rem',margin:'3%'}}>Download</button>
      </Box>
      </Box>
    </React.Fragment>
  )
}

export default Preview