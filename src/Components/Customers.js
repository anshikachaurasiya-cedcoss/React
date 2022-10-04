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
    <div className='customer_div2'>
        <h2>Meet few of our awesome customers</h2>
        <div className='customer_div2_innerDiv'>
            <img src='https://www.datocms-assets.com/40521/1614093682-india-post-payment-bank.png?auto=format&dpr=0.5&w=360' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1656499993-lloyd.png?auto=format&dpr=0.5&w=360' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1656499897-esaf-co-operative-logo.png?auto=format&dpr=0.5&w=360' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1612971047-dunzopsd.png?auto=format&dpr=0.5&w=360' alt=''/>
        </div>
        <div className='customer_div2_innerDiv'>
            <img src='https://www.datocms-assets.com/40521/1656499543-hopscotch-health.png?auto=format&dpr=0.5&w=360' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1656499543-hopscotch-health.png?auto=format&dpr=0.5&w=360' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1611224540-pro-nature.png?auto=format&w=155' alt=''/>
            <img src='https://www.datocms-assets.com/40521/1612970898-yulu.png?auto=format&dpr=0.5&w=360' alt=''/>
        </div>
    </div>
    </>
  )
}

export default Customers