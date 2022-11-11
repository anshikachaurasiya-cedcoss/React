import React from 'react'

const GetPage = (props) => {
  return (
    <>
    <h1 style={{margin:'2% auto'}}>Peform a GET request to fetch posts data.</h1>
    <table id='get'>
        <tr><th>Title</th><th>Content</th></tr>
        {props.getArr.map((item)=>{
            return(
                <tr>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            )
        })}
    </table>
    </>
  )
}

export default GetPage