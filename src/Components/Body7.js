
const Body7 = (props) => {
  return (
    <div className='main_body7_div'>
        <p style={{fontSize:'1.4rem'}}>Featured Blogs</p>
        <div className='body7_innerDiv'>
        {props.array3.map((item)=>{
            return (
                <div className='body7_innerDivs'>
                    <img src={item.img} alt=''/>
                    <p>{item.heading}</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <label style={{margin:'1%'}}>By <span>greytHR</span></label>
                        <label style={{margin:'1%'}}>{item.date}</label>
                    </div>
                </div>
            )
        })}
        </div>
        <button className="body7_btn">Find More</button>
    </div>
  )
}

export default Body7