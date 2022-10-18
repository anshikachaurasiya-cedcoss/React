import { AppBar, Button, Input, Toolbar } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
const Main = (props) => {
    return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <img src='2.png' alt='' className='img_logo'/>
                <div className='options_div'>
                    <label>Hello</label>
                    <label>Hello</label>
                    <label>Hello</label>
                    <label>Hello</label>
                </div>
                <Input placeholder='Search for News' ref={props.inpVal} />
                <Button onClick={props.findApi} type='submit'>
                    <SearchIcon/>
                </Button>
                <div className='options_div'>
                    <img src='1.png' alt=''/>
                </div>
            </Toolbar>
        </AppBar>
        <Box className='mainBox'>
            {props.arr.map((item)=>{
                return(
                <Box className='innerBox'>
                    <img src={item.urlToImage} alt=''/>
                    <div>
                    <p style={{fontWeight:"700",backgroundColor:'#00000040 !important',color:'white',height:'40px',fontSize:'1.5rem',textAlign:'center'}}>{item.title}</p>
                    <label style={{color:'white',textAlign:'center'}}>{item.description}</label>
                    <p style={{color:'white',textAlign:'center'}}>Author- {item.author}</p>
                    <span style={{color:'white',textAlign:'center'}}>Published On-- {item.publishedAt}</span>
                    <button onClick={props.read} url={item.url}>Read More...</button>
                    </div>                    
                </Box>   
                )
            })}
        </Box>
    </React.Fragment>
  )
}

export default Main