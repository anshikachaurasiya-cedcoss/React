import { Box } from '@mui/material'
import React, { useState } from 'react'
// import UsePageBottom from './UsePageBottom'

const Customhook = (props) => {
    const [sliceArr,setSliceArr]=useState(5)

    var s = props.arr.slice(0,sliceArr)
    
    // UsePageBottom()
  return (
    <React.Fragment>
        <Box className='customHook_Items'>
            {s.map((item)=>{
                return(
                    <Box className='customHook_Item'>
                        <Box sx={{background:'#e5e2e2',height:'50px',width:'100%',borderStartStartRadius:'10px',borderStartEndRadius:'10px',borderBottom:'1px solid grey'}}>
                            <label style={{margin:'2%',color:'black'}}>{item.title}</label>
                        </Box>
                        <label style={{margin:'2%',textAlign:'center'}}>{item.body}</label>
                    </Box>
                )
            })}
        </Box>
    </React.Fragment>
  )
}

export default Customhook