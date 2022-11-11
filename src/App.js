import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GetPage from './Components/GetPage';
import PostPage from './Components/PostPage';
import axios from 'axios';
import DeletePage from './Components/DeletePage';
import AsyncGet from './Components/AsyncGet';
import AsyncPost from './Components/AsyncPost';
import AsyncDelete from './Components/AsyncDelete';
import AxiosGet from './Components/AxiosGet';
import AxiosPost from './Components/AxiosPost';
import AxiosDelete from './Components/AxiosDelete';


function App() {
  var titleInp=useRef()
  var contentInp=useRef()
  var asyncPostTitleInp=useRef()
  var asyncPostContentInp=useRef()
  var axiosPostContentInp=useRef()
  var axiosPostTitleInp=useRef()
  const [getArr,setGetArr]=useState([])
  const[postArr,setPostArr]=useState([])
  const[asyncGetArr,setAsyncGetArr]=useState([])
  const[asyncPostArr,setAsycPostArr]=useState([])
  const[axiosGetArr,setAxiosGetArr]=useState([])
  const[axiosPostArr,setAxiosPostArr]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      setGetArr(data)
    },[])
    async function getData(){
      var res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setAsyncGetArr(res.data)
    }
    getData()
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setAxiosGetArr(res.data)
    })
  },[])
  const deleteHandler=()=>{
    fetch('https://dummyjson.com/products/1',{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(console.log)
  }
  const deleteAsyncHandler=()=>{
    async function delData(){
      var res = await axios.delete('https://dummyjson.com/products/1')
      console.log(res.data)
    }
    delData()
  }
  const deleteAxiosHandler=()=>{
    axios.delete('https://dummyjson.com/products/1')
    .then(res=>{
      console.log(res.data)
    })
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    var title = titleInp.current.value
    var content = contentInp.current.value
    console.log(title,content)
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title:title,
        content:content
      })
    })
    .then(res=>res.json())
    .then(data=>{
      setPostArr(data)
    })
    titleInp.current.value=''
    contentInp.current.value=''
  }
  const submitAsyncHandler=(e)=>{
    e.preventDefault()
    var asyncTitle = asyncPostTitleInp.current.value
    var asyncContent = asyncPostContentInp.current.value
    async function postData(){
      var res = await axios.post('https://jsonplaceholder.typicode.com/posts',{
        asyncTitle,
        asyncContent
      });
      setAsycPostArr(res.data)
    }
    postData()
    asyncPostContentInp.current.value=''
    asyncPostTitleInp.current.value=''
  }
  const submitAxiosHandler=(e)=>{
    e.preventDefault()
    var axiosTitle = axiosPostTitleInp.current.value
    var axiosContent = axiosPostContentInp.current.value
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      axiosTitle,
      axiosContent
    })
    .then(res=>{
      setAxiosPostArr(res.data)
    })
    axiosPostContentInp.current.value=''
    axiosPostTitleInp.current.value=''
  }
  return (
    <div className="App">
      <Link to='/'>Get</Link>
      <Link to='/post'>Post</Link>
      <Link to='/delete'>Delete</Link>
      <Link to='/async/get'>Async Get</Link>
      <Link to='/async/post'>Async Post</Link>
      <Link to='/async/delete'>Async Delete</Link>
      <Link to='/axios/get'>Axios Get</Link>
      <Link to='/axios/post'>Axios Post</Link>
      <Link to='/axios/delete'>Axios Delete</Link>
      <Routes>
        <Route path='/' element={<GetPage getArr={getArr}/>}/>
        <Route path='/post' element={<PostPage postArr={postArr} submitHandler={submitHandler} titleInp={titleInp} contentInp={contentInp}/>}/>
        <Route path='/delete' element={<DeletePage deleteHandler={deleteHandler}/>}/>
        <Route path='/async/get' element={<AsyncGet asyncGetArr={asyncGetArr}/>}/>
        <Route path='/async/post' element={<AsyncPost asyncPostArr={asyncPostArr} submitAsyncHandler={submitAsyncHandler} asyncPostTitleInp={asyncPostTitleInp} asyncPostContentInp={asyncPostContentInp}/>} />
        <Route path='/async/delete' element={<AsyncDelete deleteAsyncHandler={deleteAsyncHandler} />}/>
        <Route path='/axios/get' element={<AxiosGet axiosGetArr={axiosGetArr}/>}/>
        <Route path='/axios/post' element={<AxiosPost submitAxiosHandler={submitAxiosHandler} axiosPostContentInp={axiosPostContentInp} axiosPostTitleInp={axiosPostTitleInp} axiosPostArr={axiosPostArr} />}/>
        <Route path='/axios/delete' element={<AxiosDelete deleteAxiosHandler={deleteAxiosHandler}/>}/>
      </Routes>      
    </div>
  );
}

export default App;
