import React from 'react'

const Footer = (props) => {
  return (
    <>
    <div className={props.display} style={{fontSize:'1.3rem',color:'white',width:'30%',margin:'5px auto',height:'40px',backgroundColor:'orange',borderRadius:'5px',  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}} id='tot'>GrandTotal - ${props.Grandtotal}</div><br/>
    <button className={props.dis} onClick={props.emptyHandler}>Empty Cart</button>
    </>
  )
}

export default Footer