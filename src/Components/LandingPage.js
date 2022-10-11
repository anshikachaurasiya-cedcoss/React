import React from "react"

const LandingPage = (props) => {
    
    return (
    <div className='landingPage'>
        <div className='landingPage_innerdiv1'>
            <div className='landingpage_right'>
                <h1>Room Without books is like a body without soul...</h1>
                <img src='pic.png' alt=''/>
            </div>
            <div className='landingpage_right'>
                <input ref={props.val}/>
                <button>Search</button>
            </div>
        </div>
        <div className='list' >
            {props.arr.map((item,i)=>{
                return(
                <div className='item' ind={i} onClick={()=>props.div(item.isbn[0])}>
                    <p>{item.title}</p>
                    <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} alt=""/>
                    <p>{item.ebook_access}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default LandingPage