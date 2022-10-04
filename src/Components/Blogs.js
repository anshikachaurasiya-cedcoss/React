import React from 'react'
import Navbar from './Navbar'

const Blogs = (props) => {
  return (
    <>
    <Navbar/>
    <div className='main_resource_div'>
        <h1>Blogs</h1>
    </div>
    <div className='resourcelib_innerDiv'>
    {props.array3.map((item)=>{
        return (
            <div className='body7_innerDivs' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
                 <img src={item.img} alt=''/>
                    <p>{item.heading}</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <label style={{margin:'1%'}}>By <span>greytHR</span></label>
                        <label style={{margin:'1%'}}>{item.date}</label>
                    </div>
    </div>
        )
    })}
    <div style={{display:'flex',flexDirection:'column',height:'40%',width:'30%',justifyContent:'left',marginTop:'2%',color:'grey'}}>
        <label style={{color:'rgba(83, 159, 247, 0.945)'}}>Resource types</label>
        <span>Blog</span>
        <span>Data Capture Template</span>
        <span>Guide</span>
        <span>Letter Template</span>
        <label style={{color:'rgba(83, 159, 247, 0.945)'}}>Resource types</label>
        <span>Blog</span>
        <span>Data Capture Template</span>
        <span>Guide</span>
        <span>Letter Template</span>
    </div>
    </div>
    </>
  )
}

export default Blogs