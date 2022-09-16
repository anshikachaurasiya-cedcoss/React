import React from 'react'

const SweetPage = () => {
    alert()
    return (
    <div id='sweetPage'>
        <div id='nav'>
            <div id='optionDiv'>
                <span>Home</span>
                <span>Products</span>
                <span>More</span>
                <span>Contact Us</span>
            </div>
            <div id='cartIcon'>
                <i class="fa fa-heart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
                <i class="fa fa-shopping-cart" style={{fontSize:"24px",color:'rgb(218, 165, 32)'}}></i>
            </div>
        </div>
        <div id='sweetImg'>
            <img src='https://www.madhurimasweets.com/wp-content/uploads/2020/08/Nest-Bak-300x300.jpg' alt=''/>
            <div id='sweetContent'>
                <span>Sweets</span>
                <span>₹400/kg</span>
                <div id='sweetBtn'>
                    <div style={{height:'45px',backgroundColor:'white',borderRadius:'2px',width:'30%'}}>
                    <button style={{width:'27%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'white'}}>-</button>
                    <input style={{width:'30%',height:'35px',textAlign:'center',fontSize:'1.3rem',border:'none'}} value='0' />
                    <button style={{width:'27%',height:'40px',fontSize:'1.8rem',border:'none',backgroundColor:'white'}}>+</button>
                    </div>
                    <select style={{marginLeft:'5%',height:'45px',width:'25%',fontSize:'1.2rem'}}>
                        <option>Quantity</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SweetPage