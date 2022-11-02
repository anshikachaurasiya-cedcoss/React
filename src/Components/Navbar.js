import { AppBar } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar = () => {
  return (
  <React.Fragment>
    <AppBar sx={{background:'white',display:'flex',flexDirection:'row',justifyContent:'space-between',height:'70px',alignItems:'center'}}>
        <div style={{height:'50px',width:'9%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <img src='https://brandpalettes.com/wp-content/uploads/2018/05/Facebook-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1' alt='' style={{height:'50px',width:'50px'}}/>
            <div style={{height:'40px',width:'40px',background:'#ebedf0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'30px'}}>
                <i class="fa fa-search" style={{color:'#65676b'}}></i>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:'50px',width:'40%'}}>
            <HomeOutlinedIcon sx={{color:'#65676b',fontSize:'30px'}}/>
            <OndemandVideoOutlinedIcon sx={{color:'#65676b',fontSize:'30px'}}/>
            <StorefrontOutlinedIcon sx={{color:'#65676b',fontSize:'30px'}}/>
            <div style={{height:'30px',width:'30px',borderRadius:'30px',border:'2px solid #65676b',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <GroupsOutlinedIcon sx={{color:'#65676b',fontSize:'25px'}}/>                    
            </div>
            <i class='fas fa-chess-board' style={{color:'grey',fontSize:'20px'}}></i>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:'50px',width:'20%'}}>
            <div style={{height:'40px',width:'40px',background:'#ebedf0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
                <AppsIcon sx={{color:'black',fontSize:'30px'}}/>
            </div>
            <div style={{height:'40px',width:'40px',background:'#ebedf0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
                <i class='fab fa-facebook-messenger' style={{color:'black',fontSize:'20px'}}></i>
            </div>
            <div style={{height:'40px',width:'40px',background:'#ebedf0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
                <NotificationsIcon sx={{color:'black',fontSize:'20px'}}/>
            </div>
            <div style={{height:'40px',width:'40px',background:'#ebedf0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
                <img src='https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg' alt='' style={{height:'40px',width:'40px',borderRadius:'20px'}}/>
            </div>
        </div>
    </AppBar>
  </React.Fragment>
  )
}

export default Navbar