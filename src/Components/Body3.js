const Body3 = (props) => {
    let row={
        flexDirection:"row"
    }
    let rowRev={
        flexDirection:"row-reverse"
    }
    
    return (
    <>
    {props.array.map((item,i)=>{
        return (
        <div className='main_body3_div' style={(i%2===0)?row:rowRev}>
            <div className='main_body3_div_left'>
                <div className='main_body3_div_left_divImg'>
                    <img src={item.img} alt=''/>
                </div>
            </div>
            <div className='main_body3_div_right'>
                <div className='small_div_body3'></div>
                <label style={{fontSize:'1.5rem',marginTop:'3%'}}>{item.label1}</label>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <label style={{color:'rgb(16, 158, 214)'}}>LEARN MORE <i class='fas fa-long-arrow-alt-right'></i></label>
            </div>
        </div>
        )
    })}
    </>
    )
}

export default Body3