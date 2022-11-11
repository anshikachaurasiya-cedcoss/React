import React from 'react'

const AxiosGet = (props) => {
  return (
    <>
    <h1>Perform get request using axios</h1>
    <h1 style={{margin:'2% auto'}}>Peform a GET request to fetch posts data.</h1>
    <table id='getAxios'>
        <tr><th>Title</th><th>Content</th></tr>
        {props.axiosGetArr.map((item)=>{
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

export default AxiosGet