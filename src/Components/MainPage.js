import React from 'react'
import { Link } from 'react-router-dom'
import Body from './Body'

const MainPage = (props) => {

    return (
    <>
        <div id='nav'>
            <Link to='/home'>
                <img src='nav2.png' alt='' style={{height:'50px'}}/>
            </Link>
            <div style={{width:'15%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                <label style={{fontSize:'12px'}}>Hello</label>
                <label>Select Your Address</label>
            </div>
            <div id='search'>
                <input id='searchInp' />
                <button onClick={props.click}>
                <i class="fa fa-search" style={{fontSize:"24px",color:'black'}}></i>
                </button>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                    <label style={{fontSize:'10px'}}>Hello</label>
                    <label>Select Your Address</label>
                </div>&nbsp;&nbsp;&nbsp;
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                    <label style={{fontSize:'10px'}}>Returns</label>
                    <label>& Orders</label>
                </div>
                <i class="fa fa-shopping-cart" style={{fontSize:"30px",margin:'1%'}}></i>
                <label style={{marginTop:'2%'}}>Cart</label>
        </div>
        <div id='nav_nav2'>
        <i class="fa fa-bars" style={{fontSize:"24px",marginLeft:'1%',marginTop:'0.5%'}}></i>
        <label>All</label>
        <label>Sell</label>
        <label>Best Sellers</label>
        <label>Today's Deals</label>
        <label>Mobiles</label>
        <label>Customer Service</label>
        <label>Books</label>
        <label>Electronics</label>
        <label>Fashion</label>
        <select style={{backgroundColor:'rgb(53, 51, 51)',border:'none'}}>
            <option>Prime</option>
        </select>
        <label>Home and Kitchen</label>
        <label>New Releases</label>
        <label>Computers</label>
        <label>Amazon Pay</label>
        <label>Coupons</label>
        </div>
        <marquee behavior="scroll" direction="left">
        <i class="fa fa-thumbs-up"></i>
        <i>Happiness is not in money, but in shopping....</i>
        <i class="fa fa-thumbs-up"></i>
        </marquee>
        <div class="container" style={{width:'100%',padding:'0px'}}>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://m.media-amazon.com/images/I/71gAxGlk1YL._SX3000_.jpg" alt="Los Angeles" style={{width:"100%"}}/>
      </div>

      <div class="item">
        <img src="https://m.media-amazon.com/images/I/71Kt80NzSML._SX3000_.jpg" alt="Chicago" style={{width:"100%"}}/>
      </div>
    
      <div class="item">
        <img src="https://m.media-amazon.com/images/I/91k6GVQkGaL._SX3000_.png" alt="New york" style={{width:"100%"}}/>
      </div>
    </div>

    {/* <!-- Left and right controls --> */}
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    <Body match={props.match} div={props.div}/>
    </>
  )
}

export default MainPage

