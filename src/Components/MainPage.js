import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Body from './Body'

const MainPage = () => {
    const sweets = [
        {id:1,name:'Puzzle',price:'₹700',image:'1.jpeg' ,describe:'The term laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nuts and flavorings are also included.',quantity:'1'},
        {id:2,name:'Car',price:'₹800',image:'2.jpeg' ,describe:'Image result for roll sweet A sweet roll or sweet bun refers to any of a number of sweet, baked, yeast-leavened breakfast or dessert foods. They may contain spices, nuts, candied fruits, etc., and are ofterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsten glazed or topped with icing. ',quantity:'1'},
        {id:3,name:'Teddy',price:'₹210',image:'3.jpeg' ,describe:'Image result for kaju katli Cashew-rich homemade kaju katli are good for heart health as far as you consume them in a healthy way and avoid overeating. Unsaturated fats and omega 3 fatty acids in cashews help in lowering triglycerides levels, which help in keepingterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nuts your heart healthy',quantity:'1'},
        {id:4,name:'Auto',price:'₹700',image:'4.jpeg' ,describe:'Almond House boasts of being Telangana first ethnic foods brand that follows standards as per GMP norms with a HACCterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsP certification on its way.',quantity:'1'},
        {id:5,name:'Spiderman superman',price:'₹500',image:'5.jpeg' ,describe:'Dood peda, made famous by the Nandini Milk Co-operative in Karnataka, is another popular variety. As with laddoos, pedas are sometimes used as prasadam in relterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsigious services.',quantity:'1'},
        {id:6,name:'Aeroplane',price:'₹800',image:'6.jpg' ,describe:'Gujias are prepared in Uttar Pradesh, Rajasthan, Gujrat and Bihar regions of India during Holi and Diwali festivities. Dry ones are called Pedakiya in Bihar. Pedakiyas are vterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsery popular in Bihar and are relished by everyone',quantity:'1'},
        {id:7,name:'Minimouse',price:'₹900',image:'7.jpeg',describe:' Kheer is an Indian sweet made with cereals, lentils or their flours. The Indian cuisine has many varterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsiations of kheer recipes.',quantity:'1'},
        {id:8,name:'Popaye',price:'₹1500',image:'8.jpeg',describe:'Dry fruits like almonds, cashews, pistachios, and raisins can be a good option to binge on to satisfy hunger pangs. But, you are required to look out for the best dry fruit brands iterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsn India to ensure premium intake only',quantity:'1'},
        {id:9,name:'Minimouse doll',price:'₹600',image:'9.jpeg',describe:'Image result for rasgulla Rasgullas are prepared from milk which has high levels of calcium. Calcium and Vitamin D present in milk help in building healthy bones anterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsd teeth.',quantity:'1'},
        {id:10,name:'Jasmine doll',price:'₹1500',image:'10.jpeg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'}
    ]
    var inp='', matched=[] ,newAr=[],ind=''
    const [match,setMatch]=useState(sweets)
    const[cart,setCart]=useState([])
    var[flg,setFlg]=useState(true)
    var[id,setId]=useState()
    
    const clickHandler=()=>{
        inp =document.getElementById('searchInp').value
        for(let i=0;i<sweets.length;i++){
            if(sweets[i].name.slice(0,inp.length).toUpperCase()==inp.toUpperCase()){
                matched.push(sweets[i])
            }
        }
        setMatch([...matched])
    }

    const divHandler=(index)=>{    
        ind =index
        newAr.push(match[ind-1])
        setMatch([...newAr])
        setFlg(false)
    }
    
    const flag=(sign)=>{
        setFlg(sign)
    }
    
    const addHandler=(event)=>{
        let index='';
        var val = event.target.getAttribute('val')
        for(var i=0;i<match.length;i++){
            if(match[i].id==val){
                index=i
            }
        }
        for(var j=0;j<cart.length;j++){
            if(cart[j]==match[index]){
                cart[j].quantity++
            }
            else{
                cart.push(match[index])
            }
        }
        setCart([cart])
        alert('Sucessfully added to cart')
    } 

    const cartHandler=(sign)=>{
        if(cart.length==0){
            alert('Cart is Empty')
            return 
        }
        setFlg(false) 
        console.log(flg)
    }

    const backHandler=()=>{
        setFlg(true)
        setId('items')
    }
      
    return (
    <>
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='iconDiv'>
                <img src='iconToy.png' alt=''/>
                <span>Hello, User</span>|<span>Accounts and Details</span>
            </div>
        </div>
        <div id='searchDiv'>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={clickHandler}>Search</button>
            </div>
        </div>
        <marquee behavior="scroll" direction="left" style={{color:'dodgerblue'}}>
        <i class="fa fa-thumbs-up"></i>
        <i>We worry about what a child will become tomorrow, yet we forget that he is someone today...</i>
        <i class="fa fa-thumbs-up"></i>
        </marquee>
    </div>
    <Body match={match} cart={cart} Cart={cartHandler} flag={flag} sweets={sweets} div={divHandler} flg={flg} add={addHandler} back={backHandler}/>
    </>
  )
}

export default MainPage

