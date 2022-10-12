import { useEffect, useRef, useState } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  const [arr,setArr]=useState([])
  var inpVal=useRef()
  
  useEffect(() => {
    if (inpVal.current) {
      inpVal.current.focus();
    }
    
  }, []);

  const search=()=>{
    fetch(`https://openlibrary.org/search.json?q=${inpVal.current.value}&mode=ebooks&has_fulltext=true`)
    .then(res=>res.json())
    .then(data=>{
      setArr(data.docs)
    })
  }

  
  const divhandler=(seed)=>{
    fetch('https://openlibrary.org/api/books?bibkeys=ISBN:'+seed+'&jscmd=details&format=json')
    .then(res=>res.json())
    .then(data=>{
      let x='ISBN:'+seed;
      window.location.href=data[x].info_url
    })
  }

  return (
    <>
    <div className='main'>
      <LandingPage arr={arr} div={divhandler} val={inpVal} search={search}/>
    </div>
    </>    
  );
}

export default App;
