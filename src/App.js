import React, { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Themes from './Components/Themes';
import Explore from './Components/Explore';
import ExploreThemes from './Components/ExploreThemes';
import ThemeDescriptionPage from './Components/ThemeDescriptionPage';

function App() {
  const themes=[
    {id:1,img:'https://cdn.shopify.com/theme-store/dvm31rulbxhaxdr8rlktu4hfgfak.jpg',author:' Fuel Themes',des:'Feature-packed, high-performant Shopify theme',title:'Reformation',price:'$300 USD',c1:'Eudsdh [t3,hd,ewe]',c2:'store locater',c3:'Countdown Timer',c4:'color swatches',c5:'Quick view'},
    {id:2,img:'https://cdn.shopify.com/theme-store/ocqiffxuo2nf3904uukgol3h588s.jpg',author:' Whiley Mai',des:'A flexible & modern theme designed to accelerate your online business',title:'Erickson',price:'$320 USD',c1:'Countdown Timer',c2:'stock Counter',c3:'Mega menu',c4:'Sticky header',c5:'back to top button'},
    {id:3,img:'https://cdn.shopify.com/theme-store/s6mq9y0yxl2quowl63ot5gwl0r5z.jpg',author:'ThemeGoal',des:'Flexible, easy to use and focused on an elegant user experience.',title:'Banjo',price:'$320 USD',c1:'EUnslations [EN,KU]',c2:'color swatches',c3:'Quick view',c4:'Stock counter',c5:'In-menu promos'},
    {id:4,img:'https://cdn.shopify.com/theme-store/v27ixzfitd5v8gzt4knn6xc00dx6.jpg',author:'Shopify',des:'A bold theme that elevates product quality and brand storytelling.',title:'Refresh',price:'Free',c1:'Qick view ',c2:'Mega menu',c3:'Sticky Header',c4:'',c5:''},
    {id:5,img:'https://cdn.shopify.com/theme-store/jajz6um3tswinrxiw6sl1tg1svvy.jpg',author:'Shopify',des:'Ideal for speciality products and bold branding',title:'Sense',price:'Free',c1:'EUnslations [EN,KU]',c2:'color swatches',c3:'Quick view',c4:'Stock counter',c5:'In-menu promos'},
    {id:6,img:'https://cdn.shopify.com/theme-store/lq6s9cy6q3choaoxdxygvvfl1plr.jpg',author:'Shopify',des:'An energizing theme featuring extensive product detail layouts',title:'Empire',price:'Free',c1:'Qick view ',c2:'Mega menu',c3:'Sticky Header',c4:'',c5:''},
    {id:7,img:'https://cdn.shopify.com/theme-store/p1nc5hcxyvedrdn5imlomt2gmel4.jpg',author:'Pixel union',des:'A marketplace-inspired theme optimized for large product catalogs',title:'Prestige',price:'$300 USD',c1:'Eudsdh [t3,hd,ewe]',c2:'store locater',c3:'Countdown Timer',c4:'color swatches',c5:'Quick view'},
    {id:8,img:'https://cdn.shopify.com/theme-store/yxffaxkfykvlfqtszboe6fxjbn0m.jpg',author:'Maestroo',des:'Designed for premium, high-end brand appeal',title:'Taste',price:'Free',c1:'Quick View',c2:'Mega Menu',c3:'Sticky header',c4:'',c5:''},
  ]
  const [themeArr,setThemeArr]=useState(themes)
  var [newArr,setNewArr]=useState({})
  var navigate=useNavigate()
  const exploreHandler=()=>{
    navigate('/explore')
  }
  const exploreThemesHandler=()=>{
    navigate('/explore/themes')
  }
  const divHandler=(e)=>{
    var ind = e.target.getAttribute('index')
    newArr=themeArr[ind]
    setNewArr(newArr)
    navigate('/explore/theme/page')

  }
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Themes exploreHandler={exploreHandler}/>}/>
        <Route path='/explore' element={<Explore exploreThemesHandler={exploreThemesHandler}/>}/>
        <Route path='/explore/themes' element={<ExploreThemes themeArr={themeArr} divHandler={divHandler}/>}/>
        <Route path='/explore/theme/page' element={<ThemeDescriptionPage newArr={newArr}/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
