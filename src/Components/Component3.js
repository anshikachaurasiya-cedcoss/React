import React, { Component } from 'react'

export class Component3 extends Component {
  render() {
    return (
      <div id='Component3'>
        <h1>Connect with music Culture</h1>
        <div id='imagesDiv'>
            <div id='imageDiv'>
                <img src='https://pbs.twimg.com/media/D4_KmkkXkAAum5X.jpg'/>
                <p>Bollywood Butter</p>
                <p style={{fontSize:10}}>The finest quality Bollywood music<br/>handpicked for you.</p>
            </div>
            <div id='imageDiv'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUCc5Bhl5cTY3LyILhoAoYr_-GUio2BMWxA&usqp=CAU'/>
                <p>Punjabi 101</p>
                <p style={{fontSize:10}}>The Ultimate Punjabi Hits</p>
            </div>
            <div id='imageDiv'>
                <img src='https://a10.gaanacdn.com/gn_img/albums/lJvKa56KDV/JvKaYln4KD/size_m.jpg'/>
                <p>Hollywood Purls</p>
                <p style={{fontSize:10}}>The finest music from Hollywood</p>
            </div>
            <div id='imageDiv'>
                <img src='https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBpRPKzX/size_l.jpg'/>
                <p>Hot hits India</p>
                <p style={{fontSize:10}}>50 Hottest Hits from across the globe</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Component3