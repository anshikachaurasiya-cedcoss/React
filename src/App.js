import { createRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import SignUp from './Components/SignUp';
import ContactUs from './Components/ContactUs';
import SweetPage from './Components/SweetPage';
import Cart from './Components/Cart';

function App() {
  var nameInp=createRef(),userInp=createRef(),pwdInp=createRef()
  var [newAr,setNewAr]=useState([])
  const sweets = [
    {id:1,name:'Puzzle',price:'₹700',image:'1.jpeg' ,describe:'The term laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nuts and flavorings are also included.',quantity:'1'},
    {id:2,name:'Car',price:'₹800',image:'2.jpeg' ,describe:'Image result for roll sweet A sweet roll or sweet bun refers to any of a number of sweet, baked, yeast-leavened breakfast or dessert foods. They may contain spices, nuts, candied fruits, etc., and are ofterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsten glazed or topped with icing. ',quantity:'1'},
    {id:3,name:'Teddy',price:'₹210',image:'https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_UF226,226_FMjpg_.jpg' ,describe:'Image result for kaju katli Cashew-rich homemade kaju katli are good for heart health as far as you consume them in a healthy way and avoid overeating. Unsaturated fats and omega 3 fatty acids in cashews help in lowering triglycerides levels, which help in keepingterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nuts your heart healthy',quantity:'1'},
    {id:4,name:'Auto',price:'₹700',image:'4.jpeg' ,describe:'Almond House boasts of being Telangana first ethnic foods brand that follows standards as per GMP norms with a HACCterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsP certification on its way.',quantity:'1'},
    {id:5,name:'Spiderman superman',price:'₹500',image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/September2022GW/Jupiter_BTF/PC_QC/4-jewellery-low._SY116_CB611289922_.jpg' ,describe:'Dood peda, made famous by the Nandini Milk Co-operative in Karnataka, is another popular variety. As with laddoos, pedas are sometimes used as prasadam in relterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsigious services.',quantity:'1'},
    {id:6,name:'Aeroplane',price:'₹800',image:'https://images-eu.ssl-images-amazon.com/images/I/51hFntmRocL._AC_SX184_.jpg' ,describe:'Gujias are prepared in Uttar Pradesh, Rajasthan, Gujrat and Bihar regions of India during Holi and Diwali festivities. Dry ones are called Pedakiya in Bihar. Pedakiyas are vterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsery popular in Bihar and are relished by everyone',quantity:'1'},
    {id:7,name:'Minimouse',price:'₹900',image:'7.jpeg',describe:' Kheer is an Indian sweet made with cereals, lentils or their flours. The Indian cuisine has many varterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsiations of kheer recipes.',quantity:'1'},
    {id:8,name:'Popaye',price:'₹1500',image:'8.jpeg',describe:'Dry fruits like almonds, cashews, pistachios, and raisins can be a good option to binge on to satisfy hunger pangs. But, you are required to look out for the best dry fruit brands iterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsn India to ensure premium intake only',quantity:'1'},
    {id:9,name:'Minimouse doll',price:'₹600',image:'https://m.media-amazon.com/images/I/91nHZmnrboL._AC_SY200_.jpg',describe:'Image result for rasgulla Rasgullas are prepared from milk which has high levels of calcium. Calcium and Vitamin D present in milk help in building healthy bones anterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsd teeth.',quantity:'1'},
    {id:10,name:'Jasmine doll',price:'₹1500',image:'10.jpeg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:11,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/51S2Q31p9dL._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:12,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/61genUAVkAL._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:13,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/610mhVNIM9L._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:14,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/61RdHtI+X4L._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:15,name:'Jasmine doll',price:'₹1500',image:'https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2022/img/Certified_Refurbished/XCM_Manual_1460456_4943823_379x304_1X._SY304_CB610008849_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:16,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/716s78s5bjL._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:17,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/61gdyUSoXCS._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:18,name:'Jasmine doll',price:'₹1500',image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/eng_shoveler/200x200._CB610831816_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:19,name:'Jasmine doll',price:'₹1500',image:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/Jupiter/gateway/HPC_186X116._SY116_CB609570702_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'},
    {id:20,name:'Jasmine doll',price:'₹1500',image:'https://m.media-amazon.com/images/I/91-fWYH0L9L._AC_SY200_.jpg',describe:'Image result for milk cake Milk Cake is a tradterm laddu or ladoo is for sweetened round balls made from flour, sugar and ghee or oil. Some nutsitional Indian milk fudge thats made of milk, sugar, ghee, and an acidic agent such as lemon juice.',quantity:'1'}


]
var inp='',ind=''
const [match,setMatch]=useState(sweets)
const[cart,setCart]=useState([])
  var arr=[]
  const navigate =useNavigate()
  const[msg,setMsg]=useState()
  const[array,setArray]=useState(arr)

  const signHandler=()=>{
    var nameIn = nameInp.current.value
    var userIn = userInp.current.value
    var pwdIn = pwdInp.current.value
    var obj={name:nameIn,user:userIn,pwd:pwdIn}
    if(nameIn!=='' && userIn!=='' && pwdIn!==''){
        arr.push(obj)
        setArray(arr)
        setMsg('Signup Successfully')
        nameInp.current.value=''
        userInp.current.value=''
        pwdInp.current.value=''
    }
    else{
        setMsg('Fill all Fields')
    }
}
const loginHandler=()=>{
  var pwdIn = pwdInp.current.value
  var userIn = userInp.current.value
  if(array[0].user!=='' && array[0].pwd!==''){
    if(pwdIn===array[0].pwd && userIn===array[0].user){
      alert('Logged In')
      navigate('/home')
      pwdInp.current.value=''
      userInp.current.value=''
    }
    else{
      alert("enter valid credentials")
      setMsg('invalid credentials')
    }
  }
  else{
    alert('error')
  }
}
const divHandler=(index)=>{    
  newAr=[]
  ind =index
  newAr.push(match[ind-1])
  setNewAr([...newAr])
  navigate('/sweetPage')
}
const addHandler=(event)=>{
  var val = parseInt(event.target.getAttribute('val'))
  let data=match.filter(item=>item.id===val)
  var temp=-1
  let ar= cart.filter((item,i)=>{
    if(item.id===val)
    temp=i
    return item.id===val})
  if(ar.length>0){
    cart[temp].quantity++
  }
  else{
    cart.push({...data[0]})
  }
  setCart([...cart])
  alert('Sucessfully added to cart')
} 
const cartHandler=()=>{
  if(cart.length==0){
      alert('Cart is Empty')
      return 
  }
  navigate('/cart')
}
const plusHandler=(e)=>{
  var index = (e.target.getAttribute('ind'))
  var valInp = e.target.getAttribute('value')
  if(cart[index].quantity==valInp){
      cart[index].quantity++
  }
  setCart([...cart])
}
const minusHandler=(e)=>{
  var valInp = e.target.getAttribute('value')
  var index =e.target.getAttribute('ind')
  if(cart[index].quantity==valInp){
      if(cart[index].quantity>0){
      cart[index].quantity--
      }
  }
  setCart([...cart])
}

  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp login={signHandler} msg={msg} pwdInp={pwdInp} userInp={userInp} nameInp={nameInp}/>}/>
        <Route path='/login' element={<Login login={loginHandler} msg={msg} userInp={userInp} pwdInp={pwdInp}/>}/>
        <Route path='/home' element={<MainPage match={match} cart={cart}  sweets={sweets} div={divHandler} add={addHandler} />}/>
        <Route path='/sweetPage' element={<SweetPage cart={cart} Cart={cartHandler} match={newAr} add={addHandler}/>}/>
        <Route path='/cart' element={<Cart arr={cart} minus={minusHandler} plus={plusHandler}  />}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App;