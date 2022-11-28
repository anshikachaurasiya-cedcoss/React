import React from 'react'

const UseReducer = () => {
  return (
    <>
    <div className='reducerDiv'>
        <label>Title:</label>
        <input/>
    </div>
    <div className='reducerDiv'>
        <label>Description:</label>
        <input/>
    </div>
    <div className='reducerDiv'>
        <label>Handling Time:</label>
        <input/>
    </div>
    <div className='reducerDiv'>
        <label>Amazon Parent Sku:</label>
        <input/>
    </div>
    <div className='reducerDiv'>
        <div>
            <label>Barcode:</label>
            <input type='checkbox'/><label>Barcode/GTIN Exemption</label>
        </div>
    </div>
    <div className='reducerDiv'>
        <label>Image Selection:</label>
        <input type='radio' name='dsd'/>
        <input type='radio' name='dsd'/>
    </div>
</>
  )
}

export default UseReducer