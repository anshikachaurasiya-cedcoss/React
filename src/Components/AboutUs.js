import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='main'>
        <div id='nav'>
            <div id='optionDiv'>
                <Link to='/login'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div id='iconDiv'>
            <img src='iconToy.png' alt=''/>
            <img src='iconToy.png' alt=''/>
            <img src='iconToy.png' alt=''/>
            <img src='iconToy.png' alt=''/>
            <img src='iconToy.png' alt=''/>
            <img src='iconToy.png' alt=''/>
            </div>
        </div>
        <div id='aboutContent'>
            <h2>Our Story</h2>
            <p>Madhurima, formerly (An Establishment of Narain Das & sons) the multi-faceted honeycomb housing the food court, Sweet shop and hotel, all under one roof. A name that has been enjoying a pristine image for nearly 2 centuries now.
                Since its inception in 1825, we worked hard to offer our clientele best quality products wrapped. We focus on hygiene and proper care of all product quality. Thus… today we possess the reputation of being one of the leading firms in this trade. From a traditional shop in Aminabad, we expanded into a modern ambience in the heart of the city, ever maintaining the original taste, superior quality and utmost standards of hygiene and freshness.
                Down the years, we have not just conserved the essence of traditional sweets, but have also catered to the changing taste of modern times-adding that ‘dash of innovation’ to conventional merrymaking. Enjoying a top-notch clientele…today, we are privileged to be recognized far and wide. Because you are the inspiration…we owe it too totally!
            </p>
            <h4>REPUTATION AND PREMIUM CLIENTAGE OF MADHURIMA SWEETS</h4>
            <p>For a diamond to be truly appreciated, its brilliance needs to be seen. The awe translates into appreciation and accolades only when the experience is first hand. At Madhurima, we never miss the opportunity to show the world its brilliance. By participating in some of the biggest food and hospitality events, we ensure that the world is always updated on what are Madhurima next moves. Our Clients & Customers are exposed to the exhaustive array of our products covering Madhurima Products as well as processed food segments.</p>
        </div>
    </div>
  )
}

export default AboutUs