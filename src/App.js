import { useRef, useState } from 'react';
import './App.css';
import Main from './Components/Main';

var index

function App() {
  const notes=[
    {"name": "Mission Chinese Food","photograph": "1.jpeg","comments": "I was VERY excited tearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."},
    {"name": "Emily","photograph": "2.jpeg","comments": "Head to thitongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},
    {"name": "Kang Ho Dong Baekjeong","photograph": "3.jpeg","comments": "Joshua Smookotsu brome high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train."}
]
const match=[]
  var titleInp=useRef('')
  var contentInp=useRef('')
  var searchInp=useRef('')
  var [btn,setBtn]=useState('Add Notes')
  const [arr,setArr]=useState(notes)

  const add=()=>{
    if(btn=='Add Notes'){
    var obj={name:titleInp.current.value,photograph:'1.jpeg',comments:contentInp.current.value}
    arr.push(obj)
    }
    else{
      arr[index].name=titleInp.current.value
      arr[index].comments=contentInp.current.value
      setBtn('Add Notes')
    }
    setArr([...arr])
    titleInp.current.value=''
    contentInp.current.value=''
    console.log(arr)
  }
  const edit=(e)=>{
    index=e.target.getAttribute('index')
    titleInp.current.value=arr[index].name
    contentInp.current.value=arr[index].comments
    setBtn('Update Notes')
  }
  const del=(e)=>{
    var index = e.target.getAttribute('index')
    arr.splice(index,1)
    setArr([...arr])
  }
  const search=(e)=>{
    e.preventDefault()
    var find = searchInp.current.value
    for(let i=0;i<notes.length;i++){
      if(notes[i].name.slice(0,find.length).toUpperCase()==find.toUpperCase()){
        match.push(notes[i])
      }
      setArr([...match])
  }
  }
  
  return (
    <div className="App">
      <Main searchInp={searchInp} titleInp={titleInp} contentInp={contentInp} add={add} arr={arr} edit={edit} delete={del} btn={btn} search={search}/>
    </div>
  );
}

export default App;
