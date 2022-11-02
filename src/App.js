import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddHomeIcon from '@mui/icons-material/AddHome';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ClassIcon from '@mui/icons-material/Class';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitbitIcon from '@mui/icons-material/Fitbit';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GamesIcon from '@mui/icons-material/Games';
import PetsIcon from '@mui/icons-material/Pets';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

function App() {
  const items=[
    {des:'T500 smart watch Apple watch',price:'₹230',id:1,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t39.30808-6/313305186_1297572541156583_4252267755131586539_n.jpg?stp=c0.94.256.256a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=843cd7&_nc_ohc=pUUHf_cehyoAX9kHeZD&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBlcrMNgvQkSzUjsYAabRauQ6juF--pptNlx5l2FKBhWA&oe=636663FC',city:'Lucknow',state:'UP'},
    {des:'Rowhoues',price:'₹2.5M',id:2,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t39.30808-6/313417995_1576533256133592_2320082747911937492_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=843cd7&_nc_ohc=i3-Xa9oAvdQAX_y7TSt&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBHJPzyQamdHemnXwHCkRs1Mm0PbW13JK3xcMOEFijFWg&oe=6367AE28',city:'MohanlalGanj',state:'UP'},
    {des:'Radmi 10 A 4/64',price:'₹3,800',id:3,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/279729633_5144116725634934_513817918582070568_n.jpg?stp=c0.101.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_ohc=wOeOAFz7AHUAX9A1m0f&_nc_ht=scontent.fdel9-1.fna&oh=00_AfDtsfqbsdcTc7oGpoCBMb2X_P3RRtdbJshXpKFjrpwp7w&oe=6366D7D0',city:'Lucknow',state:'UP'},
    {des:'Smart calling',price:'₹8,500',id:4,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/295113401_5604548479624278_7389163291020830618_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=RN2TEBqnCX0AX-1e-GY&_nc_oc=AQmmaTUj1wpxFHgcVYAXLO0ejr10zqCJuvkN3CX9kBgXu-ViAUg9myoo-aYTatXYxng&_nc_ht=scontent.fdel9-1.fna&oh=00_AfCCffuFymmbLNp5b9BqI5o1vw1k-XUF_Ke6wx-qMXEibA&oe=6367F553',city:'Lucknow',state:'UP'},
    {des:'2014 Verna 1.6 top model',price:'₹45,000',id:5,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/305173296_5817622584939273_2000155528453373987_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=ITaIFcH9xeoAX8GHdOw&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBzPjLryRbfNUjguYxk2CbPIEu06MZfMjrPZJpFRNCegg&oe=6367B9FF',city:'Lucknow',state:'UP'},
    {des:'SF Apparels',price:'₹45,000,000',id:6,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/310492331_8315707641836195_7480885304827898287_n.jpg?stp=c0.42.261.261a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=Pnj8trWAe8EAX98ziHB&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBrQnMqkr4ZNw7CJ5Nl6LqGNLJs2-iy14clQmuJubObsQ&oe=6366E50C',city:'Lucknow',state:'UP'},
    {des:'🏡 *प्रोजेक्ट नाम : स्वप्निल सौभाग्य 3 ext* 🏡 ( गेटेड सोसाइटी सभी आधुनिक सुविधाओं के साथ) 🚗 लोकेश',price:'₹300',id:7,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/312582916_5841452295905730_4578707214987166607_n.jpg?stp=c0.158.261.261a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=GUvvVyunFeYAX8y0AGf&_nc_ht=scontent.fdel9-1.fna&oh=00_AfAyuLh7nbVA98vPhJcrTZxkbLBbpBEEeueqqEaQjvYBDg&oe=6366EF7B',city:'Lucknow',state:'UP'},
    {des:'Full maitain car',price:'₹700,000',id:8,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/311963242_5530095347085223_2740435585068438497_n.jpg?stp=c0.71.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_ohc=W8HroKZw-4oAX_KO8OF&_nc_ht=scontent.fdel9-1.fna&oh=00_AfAtCNEeAwLLM48N4x_ar_wMG0NQ4Tm3-LHKZSZK-yTKWA&oe=636778C6',city:'Lucknow',state:'UP'},
    {des:'सतगुरू किसान नर्सरी इन्दिरा नगर बांदा',price:'₹56,978',id:9,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/312475654_8227598800646161_5716328425622969982_n.jpg?stp=c144.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=AhX0_83cY9kAX_xAOau&_nc_ht=scontent.fdel9-1.fna&oh=00_AfB_UrDcZh6B-Eu_PXyneJ0mXEss2m-R4skDKg5lJA63MQ&oe=6366D9E9',city:'Lucknow',state:'UP'},
    {des:'2020 Apple MacBook Air Laptop Apple M1 chip, 13.3-inch33.74 cm Retina Display, 8GB RAM, 256GB SSD',price:'₹67,000',id:10,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/303518141_5264206097034755_9090807268147655273_n.jpg?stp=c0.36.261.261a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=uyFj6t4MtHkAX_yVOKB&_nc_ht=scontent.fdel9-1.fna&oh=00_AfDMvTKQzlLHqmCqlCOhDXkVZs2Y7b-bOSI_zTkFUprsSw&oe=6368006A',city:'Lucknow',state:'UP'},
    {des:'2 beds 1 bath Flat',price:'₹78,997',id:11,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/297238735_5977236278976248_6054637325104978318_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=370u7shgVy0AX8OJnz_&_nc_ht=scontent.fdel9-1.fna&oh=00_AfAmOF4hSv3v_ljBKZ-Gy5CSaBjevBe_LrB_LM0ejjFf3w&oe=63679ACE',city:'Lucknow',state:'UP'},
    {des:'🏡 *प्रोजेक्ट नाम : स्वप्निल सौभाग्य 3 ext* 🏡 ( गेटेड सोसाइटी सभी आधुनिक सुविधाओं के साथ) 🚗 लोकेश',price:'₹67,999',id:12,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t39.30808-6/312611564_6202990539766463_6822138499071817958_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=843cd7&_nc_ohc=rcDbVuyWh9cAX_DkCbK&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfC__7ZzdVm8U2KDQ5zqXU2Dc0SYehn-SrvcUPjpn7SQeA&oe=63679271',city:'Agra',state:'UP'},
    {des:'Hermano gold chain',price:'₹56,887',id:13,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/286835077_4787170928053936_7575347455737900092_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=qeOFitrSYRQAX-YyqkL&_nc_ht=scontent.fdel9-1.fna&oh=00_AfAqzfocD2r-snS2pUeYXpNnfX4ewAfxuLB6tByZJDGmPA&oe=63669E97',city:'barabanki',state:'UP'},
    {des:'Kids Sweaters',price:'₹35,886',id:14,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t15.13418-10/298637880_1447418369105200_7021171217522564141_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=MWd73-1iXccAX88kXyx&_nc_oc=AQlV4fkTfbdpQG3K3SWC3J3guhivy0GicGSAH2jdJOyJZwI4vOTsdyn-1ZEfpay4hsI&_nc_ht=scontent.fdel9-1.fna&oh=00_AfCcZQkCutRsALaNKHtmg1CuhGC6gKDy6Ii0lui_Qk7jWg&oe=6366A66C',city:'Lucknow',state:'UP'},
    {des:'🏡 *प्रोजेक्ट नाम : स्वप्निल सौभाग्य 3 ext* 🏡 ( गेटेड सोसाइटी सभी आधुनिक सुविधाओं के साथ) 🚗 लोकेश',price:'₹67,878',id:15,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/304791442_6002894439723680_4461831687348215164_n.jpg?stp=c0.29.261.261a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=peIlKKYfI6EAX9Yt9WF&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfA4vXWS_gmH16rCOygwGyduwGare8ZngJi3pWBQddGamg&oe=63672D79',city:'',state:'UP'},
    {des:'2 beds 1 bath Flat',price:'₹56,787',id:16,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/305596928_5911229812222525_5466327415141490766_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=GzoD12TcrSQAX82HSzv&_nc_ht=scontent.fdel9-1.fna&oh=00_AfD1Q3_4GNF7KYmxV6B2WCD1Gm5wLKYX1Z_MirONviPjqw&oe=636667D2',city:'Lucknow',state:'UP'},
    {des:'🏡 *प्रोजेक्ट नाम : स्वप्निल सौभाग्य 3 ext* 🏡 ( गेटेड सोसाइटी सभी आधुनिक सुविधाओं के साथ) 🚗 लोकेश',price:'₹56,767',id:17,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/285114229_7981480698592194_8805152086134990786_n.jpg?stp=c0.51.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=Q62twLOMc-4AX_CN3_d&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBzEEfEIIPKXQVMGOG3SZWme4O7W3FKxbeEPI_I4FcU0g&oe=63664F9C',city:'barabanki',state:'UP'},
    {des:'Hermano gold chain',price:'₹45,000',id:18,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t39.30808-6/310426520_3462067027415715_8488697133716932811_n.jpg?stp=c0.95.867.867a_dst-jpg_s261x260&_nc_cat=103&ccb=1-7&_nc_sid=843cd7&_nc_ohc=g7N6zGXUdQAAX-E5y1q&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfClpzzz8ahcYyn-R5wZJYiwdcbjyEObqn5KdwDMCeD0fw&oe=6367369C',city:'Lucknow',state:'UP'},
    {des:'Kids Sweaters',price:'₹56,000',id:19,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t58.17529-6/270804686_833605958072878_7962307264549921490_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=UxNooiDZgBAAX_5cO_1&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfCp5ctvznbKBDcZUPyL9bC501UZlnsb8VLCHn6MplF40Q&oe=63640C51',city:'barabanki',state:'UP'},
    {des:'Hermano gold chain',price:'₹24,787',id:20,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/311704045_5936887722989167_5147759430680520340_n.jpg?stp=c0.159.261.261a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=ZNnZl-fBvGcAX95kv-P&_nc_ht=scontent.fdel9-1.fna&oh=00_AfB3gPyszXh0C8odU-nICQasKiqm6ForxeWI6yr78UQR0A&oe=6367462C',city:'Lucknow',state:'UP'},
    {des:'2 beds 1 bath Flat',price:'₹54,787',id:21,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.1600-4/294682717_23850816318170435_5730471515080056678_n.jpg?stp=cp0_dst-jpg_p75x225_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=67cdda&_nc_ohc=17MG73v7umsAX-RDuUJ&_nc_ht=scontent.fdel9-1.fna&oh=00_AfB13OdmXwBfsiIEExZLixNC2ICioodqG9OPqcG_vWw2JQ&oe=63674B9D',city:'barabanki',state:'UP'},
    {des:'2 Beds 1 Bath - House',price:'₹787',id:22,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/311747818_5441065109281517_7619336465472839349_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=c48759&_nc_ohc=0_OHbdsCcZgAX8ZMtnE&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfC8L85MUh5jZK6LI51bZxXKwwoJ5yRA7AcDaG1CkQMS_w&oe=6367F1FD',city:'barabanki',state:'UP'},
    {des:'Bluetooth Headphones & Earphones',price:'₹7,778',id:23,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/306080235_5665267116872368_5607072346328441634_n.jpg?stp=c0.57.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_ohc=v7hzenJ31q4AX9wqX1b&_nc_ht=scontent.fdel9-1.fna&oh=00_AfCAcw3R-YCYkyHAT6A20TG6yleeprOI6cQI8gWb_Qdn2A&oe=6366F295',city:'Lucknow',state:'UP'},
    {des:'Kids Sweaters',price:'₹7,878',id:24,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/310781423_5411534208974211_3336719947608596913_n.jpg?stp=c0.140.259.259a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=6oMetK6hqU0AX8YHGwP&_nc_ht=scontent.fdel9-1.fna&oh=00_AfDX5lO6W0RNAFEPlRCL3LJ4bh_Jln8cXFzJwioRE84ZiQ&oe=63673D27',city:'barabanki',state:'UP'},
    {des:'🏡 *प्रोजेक्ट नाम : स्वप्निल सौभाग्य 3 ext* 🏡 ( गेटेड सोसाइटी सभी आधुनिक सुविधाओं के साथ) 🚗 लोकेश',price:'₹4,545',id:25,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/281662143_5099496750171771_3704157985995251331_n.jpg?stp=c0.15.261.261a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=fPLL0DxP3r4AX9XfBPm&tn=Brn0ufZ-1kzDQehn&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBg4NCmMOiYj-fgJgwnlSAr90iUvHbecAAD7dHyeNlkTQ&oe=6367E515',city:'barabanki',state:'UP'},
    {des:'Bluetooth',price:'₹455',id:26,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/306983132_5563728280350599_8461221179254782781_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=zOdOV4a0J9kAX8_ZTyC&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBWW5WKCu-qlSpUB0l7RumJ78MeSkmigv9kA9ZpqBe8Eg&oe=636808F4',city:'Lucknow',state:'UP'},
    {des:'Smart watch',price:'₹545',id:27,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/312221031_5663000223756822_7553344855355369055_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=jB1tiqt4whMAX_qaOxI&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBrjo0ygKC8CMTSygRQCODSeY2RGxcL33lqKiZ30EO1Ng&oe=636695CA',city:'Lucknow',state:'UP'},
    {des:'2 beds 1 bath Flat',price:'₹346',id:28,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/305639923_5450836138303992_9180915761322842530_n.jpg?stp=c0.30.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_ohc=V-ivsVTL4hoAX-k6ndD&_nc_ht=scontent.fdel9-1.fna&oh=00_AfA70f5nYRzYccjhkFSm7xjcnX9GuttB7CaUZos8mcUK6Q&oe=6367F256',city:'barabanki',state:'UP'},
    {des:'4gb ram 128 internal shdsd dshdsd jdsdjs dsjds',price:'₹546',id:29,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/272913865_5223439461022747_4157229732892886263_n.jpg?stp=c0.42.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=vx-Fi7yVsm4AX-WSIGv&_nc_ht=scontent.fdel9-1.fna&oh=00_AfBWQYIZQ28sTS6TsqS2EijOTCTFHt2CG2CFSDdn_Xphpg&oe=63679C6C',city:'Lucknow',state:'UP'},
    {des:'pack of 2 waterproof Led Smart watch',price:'₹6,546',id:30,img:'https://scontent.fdel9-1.fna.fbcdn.net/v/t45.5328-4/287589230_5956528444363596_2564972455209742212_n.jpg?stp=c0.5.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_ohc=lNMai1c7mhoAX_MOZO0&_nc_ht=scontent.fdel9-1.fna&oh=00_AfDdUq_ZTSP9tM8itNT27U479gFN_a8r9UJVs5ZUgP6Jeg&oe=63667D84',city:'Lucknow',state:'UP'},
  ]
  const sideItems=[
    {id:1,name:'Browse All',icon:<StorefrontIcon/>},
    {id:2,name:'Notifications',icon:<NotificationsIcon/>},
    {id:3,name:'Vehicles',icon:<DirectionsCarIcon/>},
    {id:4,name:'Property Rentals',icon:<AddHomeIcon/>},
    {id:5,name:'Apparel',icon:<ChildCareIcon/>},
    {id:6,name:'Classifieds',icon:<ClassIcon/>},
    {id:7,name:'Electronics',icon:<StayCurrentPortraitIcon/>},
    {id:8,name:'Entertainment',icon:<SportsBasketballIcon/>},
    {id:9,name:'Family',icon:<FavoriteIcon/>},
    {id:10,name:'Hobbies',icon:<FitbitIcon/>},
    {id:11,name:'Musical Instruments',icon:<LibraryMusicIcon/>},
    {id:12,name:'Toys and Games',icon:<GamesIcon/>},
    {id:13,name:'Pet Supplies',icon:<PetsIcon/>},
    {id:14,name:'Sport Goods',icon:<SportsCricketIcon/>}
  ]
  return (
    <React.Fragment>
      <Navbar/>
      <Body items={items} sideItems={sideItems}/>
    </React.Fragment>
  );
}

export default App;
