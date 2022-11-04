import { useEffect, useState } from "react";
import useArr from "./UseArr";
const List = () => {
  var [num,setNum]=useState(5)
  var [style,setStyle]=useState('on')

  useEffect(() => {
    function handleScroll() {
      var Bottom =window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
      if (Bottom){
        setTimeout(()=>{
          setNum(prev => prev + 5)
        },3000)        
        setStyle('off')
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  var Arr  = useArr(num);
  return (
    <>
    <h1>Custom Hook</h1>
    <div className='customHook_Items'>
      {
        Arr.map(item =>{
          return(
          <div className='customHook_Item'>
            <div style={{display:'flex',alignItems:'center',height:'50px',width:'100%',background:'#bbbbbb',borderStartEndRadius:'10px',borderStartStartRadius:'10px'}}>
              <label style={{background:'grey',height:'40px',width:'40px',fontSize:'1.2rem',margin:'1%'}}>{item.id}</label>
              <label style={{margin:'2%'}}>{item.title}</label>
            </div>
            <label style={{margin:'2%'}}>{item.body}</label>
          </div>
          )
        })
      }
      {(Arr.length===100)?<h2>Loading Completed...</h2>: 
      <label id="style" className={style} style={{textAlign:'center'}}>
        <img src="https://media4.giphy.com/media/y1ZBcOGOOtlpC/200w.gif?cid=82a1493bd2m8fpuceawistc8w2ppi146iotapgmtplg3g35m&rid=200w.gif&ct=g" alt="" style={{height:'100px',width:'150px'}}/>
      </label>}
    </div>
    </>
  );
};

export default List;