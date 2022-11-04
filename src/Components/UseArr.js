import { useEffect, useState } from "react";
 
const useArr = (limit) => {
    const [arr,setArr]=useState([]);
 
  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=0 &_limit=${limit}`)
    .then(res=>res.json())
    .then(data=>{
        setArr([...data])
        document.getElementById('style').setAttribute('class','on')
    },[limit])
})
 
  return arr;
};
 
export default useArr;