import React from 'react'
import Component3 from './Component3'

const Component2=()=> {
  return (
    <>
        <div id='Component2'>
        <div className='innerDiv'>
            <img src='https://image.shutterstock.com/image-vector/special-offer-paper-white-background-600w-448282759.jpg'/>
            <label>Top Offers</label>
        </div>
        <div className='innerDiv'>
            <img src='https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg'/>
            <label>Grocery</label>
        </div>
        <div className='innerDiv'>
            <img src='https://getfreedeals.co.in/wp-content/uploads/2016/08/flipkart-fashion-sale-women-1200x675.jpg'/>
            <select><option>Fashion</option></select>
        </div>
        <div className='innerDiv'>
            <img src='https://media.istockphoto.com/photos/mobile-devices-picture-id178716575?b=1&k=20&m=178716575&s=612x612&w=0&h=cYlEFrno_vwr-2EsVfN7J3Mb9g0JakH_WvOy6bGtZyc='/>
            <select><option>Electronics</option></select>
        </div>
        <div className='innerDiv'>
            <img src='https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg'/>
            <select><option>Home</option></select>
        </div>
        <div className='innerDiv'>
            <img src='https://grandhomefurnitures.com/wp-content/uploads/2022/02/istockphoto-489937474-612x612-1.jpg'/>
            <select><option>Appliances</option></select>
        </div>
        <div className='innerDiv'>
            <img src='https://rukminim1.flixcart.com/image/416/416/jxw5g280/vehicle-pull-along/m/g/r/unbreakable-pull-back-car-truck-toy-kids-mart-original-imafg95rfyguzjhk.jpeg?q=70'/>
            <select><option>Toys & More</option></select>
        </div>
      </div>
      <div>
        <Component3/>
      </div>
      </>
  )
}

export default Component2