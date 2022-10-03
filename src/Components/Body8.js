
const Body8 = (props) => {
  return (
    <div className="main_body8_div">
        {props.array4.map((item)=>{
            return(
            <div className="body8_innerDivs">
                <p>{item.heading}</p>
                <span>{item.q1}</span>
                <span>{item.q2}</span>
                <span>{item.q3}</span>
                <span>{item.q4}</span>
                <span>{item.q5}</span>
                <span>{item.q6}</span>
            </div>
            )
        })}
    </div>
  )
}

export default Body8