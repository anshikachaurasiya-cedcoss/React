import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
    const [dataArr,setDataArr]=useState(5)
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setDataArr(data)
    })
  },[])
//   useEffect(() => {
//     if (!isFetching) return;
//     callback(() => {
//       console.log('called back');
//     });
//   }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;