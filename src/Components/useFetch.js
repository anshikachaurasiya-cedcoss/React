import axios from 'axios'
import React, { useState } from 'react'

const useFetch = () => {
    var [arr,setArr]=useState([])
    
    const extractDataFromApi=(inpVal,method,Payload)=>{
        // condition for get method
        if(method==='GET'&&inpVal!==''){
            axios.get(`${inpVal}/1`)
            .then(response=>{
                setArr([response.data])
            })
        }
        // condition for post method
        else if(method==='POST'&&inpVal!==''){
            axios.post(`${inpVal}/add`,{
                title:Payload.title,
                description:Payload.description
            })
            .then(res=>{
                setArr([res.data])
            })
        }
        // condition for put method
        else if(method==='PUT'&&inpVal!==''){
            axios.put(`${inpVal}/1`,{
                title:Payload.title,
                description:Payload.description
            })
            .then(res=>{
                setArr([res.data])
            })
        }
        // condition for delete method
        else if(method==='DELETE'&&inpVal!==''){
            axios.delete(`${inpVal}/1`)
            .then(res=>{
                setArr([res.data])
            })
        }
        else{
            alert('select method or fill url')
        }
    }

    return {extractDataFromApi,arr}
}

export default useFetch