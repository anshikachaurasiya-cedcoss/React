import React, { Component } from 'react'

export class Component4 extends Component {
  render() {
    return (
    <div id='Component4'>
        <div id='leftDiv'>
            <div id='upperDiv'>
                <div id='uLeft'>
                    <label style={{margin:"2%"}}>Deals of the Day</label>
                    <img src='data:image/png;base64,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'/>
                    <label style={{color:'grey',margin:"2%"}}>23:10:50 Left</label>
                </div>
                <div id='uRight'>
                    <button>View All</button>
                </div>
            </div>
            <div id='lowerDiv'>
                <div className='imgDiv'>
                    <img src='https://rukminim1.flixcart.com/image/150/150/l4x2rgw0/mat/y/m/e/small-anti-skid-doormats-for-bathroom-entrance-and-bedrooms-original-imagfppfexh9ns3r.jpeg?q=70'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgDiv'>
                    <img src='https://rukminim1.flixcart.com/image/150/150/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgDiv'>
                    <img src='https://rukminim1.flixcart.com/image/150/150/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgDiv'>
                    <img src='https://rukminim1.flixcart.com/image/150/150/kql8sy80/lipstick/7/m/y/21-sara-s-favorite-sensational-liquid-matte-pack-of-3-touch-of-original-imag4kgnbmynydnw.jpeg?q=70'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgDiv'>
                    <img src='https://www.shopickr.com/wp-content/uploads/2015/11/snapdeal-diwali-sale-home-decor-bedsheets-2015.jpg'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgDiv'>
                    <img src='https://rukminim1.flixcart.com/image/150/150/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70'/>
                    <label>Deals on Furnishing</label>
                    <label style={{color:'green'}}>Upto 80% Off</label>
                    <label style={{color:'grey'}}>Pillow and More</label>
                </div>
                <div className='imgdiv'>
                    <div id='btnDiv'>
                        <button><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div id='rightDiv'>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e5d43b308280f531.jpg?q=70'/>
        </div>
    </div>
    )
  }
}

export default Component4