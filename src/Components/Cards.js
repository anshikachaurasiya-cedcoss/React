import React, { useState } from 'react'
import Card from './Card'

var prevClass,presentClass

const Cards = () => {

const [items,setItems]=useState([
    {id:1,img:'1.jpeg',stat:''},
    {id:1,img:'1.jpeg',stat:''},
    {id:2,img:'2.png',stat:''},
    {id:2,img:'2.png',stat:''},
    {id:3,img:'3.jpeg',stat:''},
    {id:3,img:'3.jpeg',stat:''},
    {id:4,img:'4.jpeg',stat:''},
    {id:4,img:'4.jpeg',stat:''},
    {id:5,img:'5.jpeg',stat:''},
    {id:5,img:'5.jpeg',stat:''},
    {id:6,img:'6.jpeg',stat:''},
    {id:6,img:'6.jpeg',stat:''},
    {id:7,img:'7.jpeg',stat:''},
    {id:7,img:'7.jpeg',stat:''},
    {id:8,img:'8.png',stat:''},
    {id:8,img:'8.png',stat:''},
    {id:9,img:'9.png',stat:''},
    {id:9,img:'9.png',stat:''},
    {id:10,img:'10.jpeg',stat:''},
    {id:10,img:'10.jpeg',stat:''},
    {id:11,img:'11.jpeg',stat:''},
    {id:11,img:'11.jpeg',stat:''},
    {id:12,img:'12.jpeg',stat:''},
    {id:12,img:'12.jpeg',stat:''},
].sort(()=>Math.random()-0.5))

var [prev,setPrev]=useState(-1)
var [present,setPresent]=useState(-1)
var [count,setCount]=useState(24)
var [steps,setSteps]=useState(0)

const check=()=>{
    if(items[parseInt(prev)].id==items[parseInt(present)].id){
        presentClass.classList.add('correct')
        prevClass.classList.add('correct')
        count-=2
        setCount(count)
        setPrev(-1);
        setPresent(-1)
        steps+=1
        setSteps(steps)
        console.log(steps)
        if(count==0){
            alert('you won!')
            document.getElementById('head').innerHTML='Congratulations You Won! &nbsp; Completed the game in &nbsp;' + steps + ' &nbsp;steps'
        }
    }
    else{
        steps+=1
        setSteps(steps)
        prevClass.classList.remove('active');
        presentClass.classList.remove('active');
        setPrev(-1);  
        setPresent(-1)
        console.log(steps)
    }
}
const clickHandler=(e)=>{
    var ind = e.target.getAttribute('index')
    if(prev==-1){
        e.target.classList.add('active')
        prevClass= e.target;
        setPrev(ind)        
    }
    else if(present==-1){
        e.target.classList.add('active')
        presentClass=e.target
        present=ind
        setTimeout(()=>check(),2000)
    }
}
  return (
    <div className='container'>
        {items.map((item,i)=>{
            return(
                <Card item={item} index={i} clickHandler={clickHandler}/>
            )
        })}
    </div>
  )
}

export default Cards