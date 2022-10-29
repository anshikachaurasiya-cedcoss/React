import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Brand from './Components/Brand';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';
import Logo from './Components/Logo';
import Navbar from './Components/Navbar';
import Use from './Components/Use';
import Preview from './Components/Preview';
import Edit from './Components/Edit';

function App() {
  const items=[
    {id:1,image:'1.svg',des:'Fashion'},
    {id:2,image:'2.svg',des:'Health and Beauty'},
    {id:3,image:'3.svg',des:'Home and Garden'},
    {id:4,image:'4.svg',des:'Food and Drink'},
    {id:5,image:'5.svg',des:'Sports and rec'},
    {id:6,image:'6.svg',des:'Gifts and collectibles'},
    {id:7,image:'7.svg',des:'Tech'},
    {id:8,image:'8.svg',des:'Art and Photos'},
    {id:9,image:'9.svg',des:'Services'},
    {id:10,image:'10.svg',des:'Games'},
    {id:11,image:'11.svg',des:'Children'},
    {id:12,image:'12.svg',des:'Pets'},
    {id:13,image:'13.svg',des:'None of above'}
  ]
  const Item=[
    {id:1,image:'14.svg',des:'Bold'},
    {id:2,image:'15.svg',des:'Calm'},
    {id:3,image:'16.svg',des:'Reliable'},
    {id:4,image:'17.svg',des:'Classic'},
    {id:5,image:'18.svg',des:'Conservative'},
    {id:6,image:'19.svg',des:'Creative'},
    {id:7,image:'20.svg',des:'Elegant'},
    {id:8,image:'21.svg',des:'Energetic'},
    {id:9,image:'22.svg',des:'Friendly'},
    {id:10,image:'23.svg',des:'Futuristic'},
    {id:11,image:'24.svg',des:'Industrial'},
    {id:12,image:'25.svg',des:'Innovative'},
    {id:13,image:'26.svg',des:'Modern'}
  ]
  const use=[
    {id:1,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/717305c3773e01b24ff0e5e24399a4ab.svg',status:'',des:'Online Store or Website'},
    {id:2,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/db7bf96e92754f46db18b3c5637ea70e.svg',status:'',des:'Social Media'},
    {id:3,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/05c88aab7ef6d16d41f0806cbdabbd18.svg',status:'',des:'Print and Swag'},
    {id:4,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/faa7fc1b346aa597b2b2384a0b96bb1b.svg',status:'',des:'Business Cards'},
    {id:5,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/1f71d4de448e5254aca6545829078cac.svg',status:'',des:'Large Surfaces'},
    {id:6,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/f23df788bb9bcb79344e6d3af79d8beb.svg',status:'',des:'Physical Stores'},
    {id:7,icon1:'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/8da9f0440f1c84ebcaadbabd036ca38a.svg',status:'',des:'None of the Above'},
  ]
  const style=[
    {id:1,img:'e1'},
    {id:2,img:'e2'},
    {id:3,img:'e3'},
    {id:4,img:'e4'},
  ]
  var navigate=useNavigate()
  var [count,setCount]=useState(1)
  var [flg,setFlg]=useState(0)
  const [Items,setItems]=useState(Item)

  var [business,setBusiness]=useState('')
  var [slogan,setSlogan]=useState('')
  var [next,setNext]=useState('Next')

  // useEffect(()=>{
  //   var it = document.getElementById('item')
  //   it.classList.add('box_border')
  // },[])
  const divHandler=(e)=>{
    let variable=e.target.parentElement.parentElement.parentElement.children
    for(let i=0;i<variable.length;i++)
    {
      variable[i].classList.remove('box_border')
    }
    e.target.closest('#item').classList.add('box_border')
  }
  const divHandler2=(e)=>{
    let variable = e.target.parentElement.parentElement.parentElement.children
    for(let i=0;i<variable.length;i++){
      variable[i].classList.remove('box_border')
    }
    e.target.closest('#item2').classList.add('box_border')
  }
  const divHandler3=(e)=>{
    console.log(e.target.parentElement)
    console.log(e.target.getAttribute('index'))
    let variable = e.target.children
    for(var i=0;i<variable.length;i++){
      console.log(variable[i].classList.add('box_border'))
    }
  }
  const nextHandler=()=>{
    if(count==1){
      count+=1
      setCount(count)
      setItems(Items)
      navigate('/brand')
    }
    else if(count==2){
      count+=1
      setCount(count)
      navigate('/login')                                                    
    }
    else if(count==3){
      count+=1
      setCount(count)
      navigate('/use')
    }
    else if(count==4){
      count+=1
      setCount(count)
      navigate('/logo')
    }
    else if(count==5){
      count+=1
      setCount(count)
      navigate('/edit')
    }
    else if(count==6){
      setNext('Download')
      navigate('preview')
    }
    else{
      return
    }
  }
  // const backHandler=()=>{
  //   if(flg==0){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/')
  //   }
  //   else if(flg==1){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/brand')
  //   }
  //   else if(flg==2){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/login')
  //   }
  //   else if(flg==3){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/use')
  //   }
  //   else if(flg==4){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/logo')
  //   }
  //   else if(flg==5){
  //     count-=1
  //     setCount(count)
  //     flg+=1
  //     setFlg(flg)
  //     navigate('/edit')
  //   }
  // }
  const changeHandler=(e)=>{
    setBusiness(e.target.value)
    console.log(business)
  }
  const changeHandler2=(e)=>{
    setSlogan(e.target.value)
  }
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Body items={items} divHandler={divHandler}y/>}/>
        <Route path='/brand' element={<Brand Items={Items} divHandler2={divHandler2} />}/>
        <Route path='/login' element={<LoginPage changeHandler={changeHandler} changeHandler2={changeHandler2}/>}/>
        <Route path='/use' element={<Use use={use} divHandler3={divHandler3}/>}/>
        <Route path='/logo' element={<Logo style={style}/>}/>
        <Route path='/edit' element={<Edit business={business} slogan={slogan} />}/>
        <Route path='/preview' element={<Preview/>}/>
      </Routes>
      <Footer nextHandler={nextHandler} next={next}/>
    </React.Fragment>
  );
}

export default App;
