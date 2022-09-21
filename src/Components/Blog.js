import React from 'react'

const Blog = (props) => {
    console.log(props.arr2)
  return (
    <div id='blog'>
        <div className='blog1'>
            <div>
                <h1>Create your own blog</h1>
                <p>lorem hjsahs hgagsas jhgdd jhdgsd jhgdsad jhger jkfdhfsd jhsds ikvkjcvc jkfhf</p>
                <button>Create Blog</button>
            </div>
            <img src='blog1.png' alt=''/>
        </div>
        <h1>Blog</h1>
        <div className='items'>
      <div className='list'>
        {props.arr.map((records,i)=>{
          return (
          <div className='item' ind={i}>
              <img alt='' src={records.photograph}/>
              <div className='itemDetails'>
                <p id='pName'>{records.name}</p>
                <p id='pPlace' style={{color:'yellow'}}>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </p>
              </div>
              {props.arr2.map((item)=>{
           return <p>{item.comments}</p>
        })}
           </div>
          )
         
        })}
        
      </div>
    </div>
    </div>
  )
}

export default Blog