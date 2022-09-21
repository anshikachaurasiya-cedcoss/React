import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Body from './Body'

const MainPage = () => {
    const sweets = [
        {name:'Ladoo',price:'₹700/kg',image:'a.jpg' ,describe:'The term laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nuts and flavorings are also included.',quantity:'1'},
        {name:'Roll Sweet',price:'₹800/kg',image:'Roll.jpg' ,describe:'Image result for roll sweet A sweet roll or sweet bun refers to any of a number of sweet, baked, yeast-leavened breakfast or dessert foods. They may contain spices, nuts, candied fruits, etc., and are often glazed or topped with icing. ',quantity:'1'},
        {name:'Kaju Katli',price:'₹2100/kg',image:'Kaju.jpg' ,describe:'Image result for kaju katli Cashew-rich homemade kaju katli are good for heart health as far as you consume them in a healthy way and avoid overeating. Unsaturated fats and omega 3 fatty acids in cashews help in lowering triglycerides levels, which help in keeping your heart healthy',quantity:'1'},
        {name:'Almond Sweet',price:'₹700/kg',image:'f.jpg' ,describe:'Almond House boasts of being Telangana first ethnic foods brand that follows standards as per GMP norms with a HACCP certification on its way.',quantity:'1'},
        {name:'Special Peda',price:'₹500/kg',image:'peda.jpg' ,describe:'Dood peda, made famous by the Nandini Milk Co-operative in Karnataka, is another popular variety. As with laddoos, pedas are sometimes used as prasadam in religious services.',quantity:'1'},
        {name:'Gujhiya',price:'₹800/kg',image:'gujhiya.jpg' ,describe:'Gujias are prepared in Uttar Pradesh, Rajasthan, Gujrat and Bihar regions of India during Holi and Diwali festivities. Dry ones are called Pedakiya in Bihar. Pedakiyas are very popular in Bihar and are relished by everyone',quantity:'1'},
        {name:'Kheer',price:'₹900/kg',image:'kheer.jpeg',describe:' Kheer is an Indian sweet made with cereals, lentils or their flours. The Indian cuisine has many variations of kheer recipes.',quantity:'1'},
        {name:'Dry Fruit sweet',price:'₹1500/kg',image:'a.jpg',describe:'Dry fruits like almonds, cashews, pistachios, and raisins can be a good option to binge on to satisfy hunger pangs. But, you are required to look out for the best dry fruit brands in India to ensure premium intake only',quantity:'1'},
        {name:'Rasgulla',price:'₹600/kg',image:'rasgullasf.jpg',describe:'Image result for rasgulla Rasgullas are prepared from milk which has high levels of calcium. Calcium and Vitamin D present in milk help in building healthy bones and teeth.',quantity:'1'},
        {name:'Milk Cake',price:'₹1500/kg',image:'jj.jpg',describe:'Image result for milk cake Milk Cake is a traditional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'}
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
                <span>Hello, User</span>|<span>Accounts and Details</span>
            </div>
        </div>
        <div id='searchDiv'>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={clickHandler}>Search</button>
            </div>
        </div>
        <Banner/>
    </div>
    <Body match={match} sweets={sweets}/>
    <div id='footerDiv'>
    <i class="fa fa-facebook-f" style={{fontSize:"24px" ,marginTop:'1%',marginLeft:'40%'}}></i>
            <i class="fa fa-instagram" style={{fontSize:"24px",marginTop:'1%',margin:'1%'}}></i>
            <i class="fa fa-twitter" style={{fontSize:"24px",marginTop:'1%'}}></i>
            <i class="fa fa-pinterest" style={{fontSize:"24px",marginTop:'1%',margin:'1%'}} ></i>
            <span style={{marginTop:'1%'}}>@Copyright All Rights Reserved</span>
    </div>
    </>
  )
}

export default MainPage