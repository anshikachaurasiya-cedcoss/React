import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Body from './Body'

const MainPage = () => {
    const sweets = [
        {name:'Ladoo',price:'₹700/kg',image:'a.jpg'},
        {name:'Roll Sweet',price:'₹800/kg',image:'Roll.jpg'},
        {name:'Kaju Katli',price:'₹2100/kg',image:'Kaju.jpg'},
        {name:'Almond Sweet',price:'₹700/kg',image:'f.jpg'},
        {name:'Special Peda',price:'₹500/kg',image:'peda.jpg'},
        {name:'Gujhiya',price:'₹800/kg',image:'gujhiya.jpg'},
        {name:'Kheer',price:'₹900/kg',image:'kheer.jpeg'},
        {name:'Dry Fruit sweet',price:'₹1500/kg',image:'a.jpg'},
        {name:'Rasgulla',price:'₹600/kg',image:'rasgullasf.jpg'},
        {name:'Milk Cake',price:'₹1500/kg',image:'jj.jpg'}
    ]
    var inp='', matched=[]
    const [match,setMatch]=useState(sweets)
    const clickHandler=()=>{
        inp =document.getElementById('searchInp').value
        for(let i=0;i<sweets.length;i++){
            if(sweets[i].name.slice(0,inp.length).toUpperCase()==inp.toUpperCase()){
                matched.push(sweets[i])
            }
        }
        setMatch([...matched])
    }
    return (
        <>
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
                <Link to='/login'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='iconDiv'>
                <i class='fas fa-user-circle' style={{fontSize:'24px'}}></i>
                <span>Sign in</span>|<span>Log in</span>
            </div>
        </div>
        <div id='searchDiv'>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={clickHandler}>Search</button>
            </div>
            <div id='cartIcon'>
            <i class="fa fa-heart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            <i class="fa fa-shopping-cart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            </div>
        </div>
        <Banner/>
    </div>
    <Body match={match} sweets={sweets}/>
    </>
  )
}

export default MainPage