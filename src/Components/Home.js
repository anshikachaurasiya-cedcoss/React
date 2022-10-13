import { AppBar, Typography } from '@mui/material'
import React from 'react'
import AddCart from './AddCart'

const Home = (props) => {
    return (
    <React.Fragment>
        <AppBar>
            <Typography variant='h2'>Shopping Cart</Typography>
        </AppBar>
        <div id='main'>
            {props.productsArr.map((item,i)=>{
                return (
                <div class='product' id='productid'>
                    <img src={item.image} alt=''/>
                    <span>
                        <h4>{item.name}</h4>
                    </span>
                    <button className='btnCart' onClick={props.btnCart} index={i} val={item.name}>Add to Cart</button>
                </div>
                )
            })}
        </div>
        <AddCart display={props.display} cart={props.cart} dis={props.dis} productsArr={props.productsArr} btnCart={props.btnCart} deleteHandler={props.deleteHandler} emptyHandler={props.emptyHandler} plusHandler={props.plusHandler} minusHandler={props.minusHandler} />
    </React.Fragment>
    )
}

export default Home