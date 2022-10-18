import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search_div'>
        <img src='1.png' alt=''/>
        <form onSubmit={props.search}>
          <input  placeholder='Search Here...' ref={props.searchInp}/>
          <button type='submit' style={{display:'none'}}>search</button>
        </form>
        
        <div style={{height:'30px',width:'30px',background: '#6363d9',color: 'white',display: 'flex',margin:'1%',justifyContent: 'center',alignItems: 'center',borderRadius: '20px'}}>
        <i class="fa fa-facebook-f"></i>
        </div>
        <div style={{height:'30px',width:'30px',  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',color: 'white',display: 'flex',margin:'1%',justifyContent: 'center',alignItems: 'center',borderRadius: '20px'}}>
        <i class="fa fa-instagram"></i>
        </div>
        <div style={{height:'30px',width:'30px',background: 'rgb(86 176 243)',color: 'white',display: 'flex',margin:'1%',justifyContent: 'center',alignItems: 'center',borderRadius: '20px'}}>
        <i class="fa fa-twitter"></i>
        </div>
        <div style={{height:'30px',width:'30px',background: 'rgb(86 176 243)',color: 'white',display: 'flex',margin:'1%',justifyContent: 'center',alignItems: 'center',borderRadius: '20px'}}>
        <i class="fa fa-telegram"></i>
        </div>
    </div>
  )
}

export default SearchBar