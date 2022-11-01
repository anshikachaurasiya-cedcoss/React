import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const CapitalPage = (props) => {
  return (
  <React.Fragment>
    <Navbar color='white'/>
    <Box className='capitalMainBox'>
      <Box className='capitalMainBoxLeft'>
        <label style={{fontWeight:'500'}}>SHOPIFY CAPITAL</label>
        <h1 style={{marginLeft:'50px',fontSize:'2.625em'}}>Business funding.Your way</h1>
        <label>Get the freedom to grow your business the way you want with fast funding and flexible payments through Shopify Capital.</label>
        <Button sx={{color:'white',backgroundColor:'#008060',height:'50px',textTransform:'capitalize',fontWeight:'600',marginLeft:'10%',marginTop:'5%',width:'270px'}}>Log in to check eligibility</Button>
          <div style={{marginTop:'3%'}}>
            <label>Don’t have a Shopify store? </label>
            <label style={{textDecoration:'underline',color:'#008060'}}>Start a free trial</label>
          </div>
      </Box>
      <img style={{height:'80%',width:'45%'}} src='https://cdn.shopify.com/shopifycloud/brochure/assets/capital/capital-hero-new-small-a2fd2b4a271ee664ea2caff049cd7056766083197fb7eae093e5f68ea82f122f.jpg' alt=''/>
    </Box>
    <img src={process.env.PUBLIC_URL + "/newImg.png"} alt='' style={{height:'350px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg2.png'} alt='' style={{height:'200px',width:'100%'}}/>
    <Box className='capitalItemsBox'>
      {props.capital.map((item)=>{
        return(
        <Box className='capitalItemBox'>
          <img src={item.img} alt='' style={{height:'190px',width:'90%',margin:'auto'}}/>
          <label style={{margin:'3%',textAlign:'left',display:'flex'}}>{item.title}</label>
          <label style={{margin:'3%',alignItems:'left',display:'flex'}}>{item.des}</label>
          <Button sx={{color:'white',backgroundColor:'#008060',margin:'5%'}}>{item.btnText}</Button>
        </Box>
        )
      })}
    </Box>
    <img src={process.env.PUBLIC_URL + '/newImg3.png'} alt='' style={{height:'600px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg4.png'} alt='' style={{height:'400px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg5.png'} alt='' style={{height:'500px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg6.png'} alt='' style={{height:'400px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg7.png'} alt='' style={{height:'500px',width:'100%'}}/>
    <img src={process.env.PUBLIC_URL + '/newImg8.png'} alt='' style={{height:'500px',width:'100%'}}/>
  </React.Fragment>
  )
}

export default CapitalPage