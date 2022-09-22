import React from 'react'

const Blog = (props) => {
 
  return (
  <div id='blog'>
    <div className='blog1'>
      <div>
        <h1>Create your own blog</h1>
        <p>My informal writing style is a political choice, because I want feminism to be more accessible.</p>
        <input type='text' placeholder='Enter Blog Heading' ref={props.text}/>
        <textarea rows='6' columns='15' placeholder='Enter Your Blog Here' ref={props.blog}/>
        <button onClick={props.add}>Add Blog</button>
      </div>
      <img src='blog1.png' alt=''/>
    </div> 
    <h1>Blog</h1>
    <div className='items'>
      <div className='list'>
        {props.arr.map((records,i)=>{
          return (
          <div className='item' ind={i}>
            <img alt='' src='7.jpeg'/>
            <p id='pName'>{records.name}</p>
            <p id='comment'>{records.comments}</p>
          </div>
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default Blog