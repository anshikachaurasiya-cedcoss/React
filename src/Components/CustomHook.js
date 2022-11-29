import React, { useRef } from 'react'
import useFetch from './useFetch'

const CustomHook = () => {
    const sel = ['GET','POST','PUT','DELETE']
    var urlInp = useRef(''),method='',desInp=useRef(''),titleInp=useRef('')

    const selectHandler=(e)=>{
        var ind = e.target.selectedIndex
        method = sel[ind-1]
    }

    var {extractDataFromApi,arr} = useFetch()

    return (
    <div>
        <label>Enter the Url:</label>
        <input ref={urlInp}/><br/><br/>
        <label>Select the method:</label>
        <select onChange={selectHandler}>
            <option>Select Method</option>
            {sel.map((item)=>{
                return(
                <option>{item}</option>
                )
            })}
        </select><br/><br/>
        <label>Enter the Payload value:</label>
        <input placeholder='Enter Title' ref={titleInp}/>
        <input placeholder='Enter Description' ref={desInp}/><br/><br/>
        <button onClick={()=>{extractDataFromApi(urlInp.current.value,method,{title:titleInp.current.value,description:desInp.current.value})}}>Get Api</button>
        {arr.length!==0?
        <table className='customtable'>
            <tr><th>User ID</th><th>Title</th><th>Description</th></tr>
            {arr.map((item)=>{
            return(
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
            </tr>    
            )
            })}
        </table>:
        <p></p>}
    </div>
  )
}

export default CustomHook