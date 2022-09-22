import React, { createRef, useState } from 'react'
import Blog from './Blog'
import BodyDiv from './BodyDiv'
import Footer from './Footer'
import Nav from './Nav'

const Home = () => {
    const blog=[
        {"name": "Mission Chinese Food","photograph": "1.jpeg","comments": "I was VERY excited tearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."},
        {"name": "Emily","photograph": "2.jpeg","comments": "Head to thitongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},
        {"name": "Kang Ho Dong Baekjeong","photograph": "3.jpeg","comments": "Joshua Smookotsu brome high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train."}
    ]
    var[blogArr,setBlogArr]=useState(blog)
    var textInp = createRef()
    var blogInp = createRef()
    const addHandler=()=>{
        var obj={};
      obj ={name:textInp.current.value,comments:blogInp.current.value}
      blogArr.push(obj)
    setBlogArr([...blogArr])
    textInp.current.value=''
    blogInp.current.value=''
    }
  return (
    <div id='home'>
        <Nav/>
        <div id='homeBody'>
            <BodyDiv/>
            <Blog arr={blogArr} text={textInp} blog={blogInp} add={addHandler}/>
        </div>
        <Footer/>
    </div> 
  )
}

export default Home