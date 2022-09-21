import React, { useState } from 'react'
import Blog from './Blog'
import BodyDiv from './BodyDiv'
import Footer from './Footer'
import Nav from './Nav'

const Home = () => {
    const blog=[
        {
            "id": 1,
            "name": "Mission Chinese Food",
            "photograph": "1.jpeg",
            "address": "171 E Broadway, New York, NY 10002",
            
        },
        {
            "id": 2,
            "name": "Emily",
            "photograph": "2.jpeg",
            "address": "919 Fulton St, Brooklyn, NY 11238",
        },
        {
            "id": 3,
            "name": "Kang Ho Dong Baekjeong",
            "photograph": "3.jpeg",
            "address": "1 E 32nd St, New York, NY 10016",
            
        },
        {
            "id": 4,
            "name": "Katz's Delicatessen",
            "photograph": "4.jpeg",
            "address": "205 E Houston St, New York, NY 10002",
            
        },
        {
            "id": 5,
            "name": "Roberta's Pizza",
            "photograph": "5.jpeg",
            "address": "261 Moore St, Brooklyn, NY 11206",
        },
        {
            "id": 6,
            "name": "Hometown BBQ",
            "photograph": "6.jpeg",
            "address": "454 Van Brunt St, Brooklyn, NY 11231",
           
        },
        {
            "id": 7,
            "name": "Superiority Burger",
            "photograph": "7.jpeg",
            "address": "430 E 9th St, New York, NY 10009",
            
        },
        {
            "id": 8,
            "name": "The Dutch",
            "photograph": "8.jpeg",
            "address": "131 Sullivan St, New York, NY 10012",
            
        },
        {
            "id": 9,
            "name": "Mu Ramen",
            "photograph": "9.jpeg",
            "address": "1209 Jackson Ave, Queens, NY 11101",
        },
        {
            "id": 10,
            "name": "Casa Enrique",
            "photograph": "10.jpeg",
            "address": "5-48 49th Ave, Queens, NY 11101",
           
        }
    ]
    const reviews= [
        {
            "name": "Jason",
            "date": "October 26, 2016",
            "rating": 3,
            "comments": "I was VERY excited tearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."
        },
        {
            "name": "Steve",
            "date": "October 26, 2016",
            "rating": 5,
            "comments": "Head to thitongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."
        },
        {
            "name": "Steve",
            "date": "October 26, 2016",
            "rating": 4,
            "comments": "Joshua Smookotsu brome high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train."
        },
        {
            "name": "Brittany",
            "date": "October 26, 2016",
            "rating": 4,
            "comments": "Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."
        },
        {
            "name": "Sally",
            "date": "October 26, 2016",
            "rating": 4,
            "comments": "One of the tastiestin NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."
        }
    ]
    var[blogArr,setBlogArr]=useState(blog)
    var[review,setReview]=useState(reviews)
  return (
    <div id='home'>
        <Nav/>
        <div id='homeBody'>
            <BodyDiv/>
            <Blog arr={blogArr} arr2={review} />
        </div>
        <Footer/>
    </div>
  )
}

export default Home