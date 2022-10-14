import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GradeIcon from '@mui/icons-material/Grade';
import { Box } from '@mui/system';

const MainPage = () => {
    var searchInp = useRef('');
    const [arr,setArr]=useState([])

   useEffect(()=>{
    if(searchInp.current){
        searchInp.current.focus();
    }
    fetch('https://openlibrary.org/search.json?q=react&mode=ebooks&has_fulltext=true')
    .then(res=>res.json())
    .then(data=>{
        setArr(data.docs)
        console.log(data.docs)}
    )
   },[])
   const submit=(e)=>{
    e.preventDefault()
    fetch(`https://openlibrary.org/search.json?q=${searchInp.current.value}&mode=ebooks&has_fulltext=true`)
    .then(res=>res.json())
    .then(data=>{
        setArr(data.docs)
    })
}
const divHandler=(num)=>{
    fetch('https://openlibrary.org/api/books?bibkeys=ISBN:'+num+'&jscmd=details&format=json')
    .then(res=>res.json())
    .then(data=>{
      let x='ISBN:'+num;
      window.location.href=data[x].info_url
    })
}

  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <LibraryBooksIcon/>
                <Typography variant='h4'>Library App</Typography>
                <Button>Get Started</Button>
            </Toolbar>            
        </AppBar>
        <Box className='search_div'>
            <Typography variant='h4'>Stunning free Books & royalty free stock</Typography>
            <Typography sx={{color:'white'}}>Over 2.7 million+ high quality stock books, videos and music shared by our talented community.</Typography>
            <form onSubmit={submit}>
                <input className='search_inp' ref={searchInp} placeholder='Search Here...'/>
                <button  style={{display:'none'}} type='submit'/>
            </form> 
            <Typography sx={{marginTop:'20px',color:'white'}}>Popular Books: nature, wallpaper, background, halloween, sky, sky cloud, cat, money, food, dog, flowers, car, iphone</Typography>
        </Box>
        <Box className='list'>
            {arr.map((item)=>{
                return(
                    <Box className='item' onClick={()=>divHandler(item.isbn[0])}>
                        <Typography className='title'>{item.title}</Typography>
                        <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} alt=""/>
                        <Typography className='content'>{item.cover_i}</Typography>
                        <Typography className='content1'>{item.ebook_access}</Typography>
                        <Typography className='content2'>losdjsd kdjskd dksdjsd kdjskd dk sdjsd kdjskd dk sdjsd kdjskd dksjdks sjdsd kdjsd kdjsd wejwe dkjskd</Typography>
                        <GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/><GradeIcon className='star'/>
                    </Box>
                )
            })}
        </Box>
    </React.Fragment>
  )
}

export default MainPage