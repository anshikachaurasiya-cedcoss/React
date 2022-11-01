import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CapitalPage from './Components/CapitalPage';
import MainPage from './Components/MainPage';

function App() {
  const capital=[
    {id:1,btnText:'Build Your Dream Team',img:'https://cdn.shopify.com/shopifycloud/brochure/assets/capital/capital-funding-test-handshake-small-d3254ef8a21b55df7cdc068f732b42ac3b5872fd990d8cc629edaf42993fe4c5.png',title:'Hire who you need',des:'Bring on experts or freelancers, compete for top talent, and increase your team’s productivity with the right people on board.'},
    {id:2,btnText:'Stock up on inventory',img:'https://cdn.shopify.com/shopifycloud/brochure/assets/capital/capital-funding-test-box-small-71dcc6ba52b8368087d9fdebf2143afaf9c39326c2ed045ae426abb5d6c6c378.png',title:'Beat backorders',des:'Stock up on bestsellers, take advantage of bulk discounts, and get ready for seasonal sales without compromising your cash flow.'},
    {id:3,btnText:'Ramp up your marketing',img:'https://cdn.shopify.com/shopifycloud/brochure/assets/capital/capital-funding-test-target-small-10edf975bab41cb16e9ff27b0eaa250b86017bded557745e566a45daca3e45b6.png',title:'Stay competitive',des:'Keep your ads running during peak seasons, optimize your online store for SEO, and promote your brand on social to reach more buyers and boost conversions.'},
  ]
  var navigate=useNavigate()
  const capitalHandler=()=>{
    navigate('/capital/page')
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage capitalHandler={capitalHandler}/>}/>
        <Route path='/capital/page' element={<CapitalPage capital={capital}/>}/>
      </Routes>      
    </React.Fragment>
  );
}

export default App;
