import React from 'react'
import Navbar from './Navbar'

const Customers = () => {
  return (
    <>
    <Navbar/>
    <div className='main_customer_div'>
        <h2>Great teams achieve more with greytHR</h2>
        <div style={{display:'flex',flexDirection:'row',height:'60%',width:'90%'}}>
            <div style={{color:'white',height:'90%',width:'20%',textAlign:'center',margin:'auto'}}>
                <h2>15,000+</h2>
                <label>CUSTOMERS</label>
            </div>
            <div style={{color:'white',height:'90%',width:'20%',textAlign:'center',margin:'auto'}}>
                <h2>150+</h2>
                <label>CITIES</label>
            </div>
            <div style={{color:'white',height:'90%',width:'20%',textAlign:'center',margin:'auto'}}>
                <h2>15 LAKH+</h2>
                <label>USERS</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Customers