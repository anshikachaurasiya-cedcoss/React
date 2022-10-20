import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const MainPage = (props) => {

  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <img src='1.png' alt=''/>
                <Link to='/'>
                <Typography variant='h4'>Ecommerce Site</Typography>
                </Link>
                <Link to='/category'>Categories</Link>
                <Link to='/users'>Users</Link>
                <Button>Get Started</Button>
            </Toolbar>            
        </AppBar>
        <Box className='search_div'>
            <Typography variant='h4'>Stunning free Products & royalty free stock</Typography>
            <Typography sx={{color:'white'}}>Over 2.7 million+ high quality stock Products, videos and music shared by our talented community.</Typography>
            <form onSubmit={props.submit}>
                <input className='search_inp' ref={props.searchInp} placeholder='Search Here...'/>
                <button  style={{display:'none'}} type='submit'/>
            </form> 
            <Typography sx={{marginTop:'20px',color:'white'}}>Popular Products: nature, wallpaper, background, halloween, sky, sky cloud, cat, money, food, dog, flowers, car, iphone</Typography>
        </Box>
        <Box className='list'>
            {props.arr.map((item)=>{
                return(
                    <Box className='item'>
                        <Typography className='title'>{item.category.name}</Typography>
                        <img src={item.images[0]} alt="Image not found"/> 
                        <Typography className='content'>${item.price}</Typography>
                        <Typography className='content1'>{item.title}</Typography>
                        <Typography className='content2'>{item.description}</Typography>
                        <GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/>
                    </Box>
                )
            })}
        </Box>
    </React.Fragment>
  )
}

export default MainPage