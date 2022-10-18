import React from 'react'
import Create from './Create'
import Notes from './Notes'
import SearchBar from './SearchBar'

const Main = (props) => {
  return (
    <div className='main_div'>
        <SearchBar searchInp={props.searchInp} search={props.search}/>
        <Create titleInp={props.titleInp} contentInp={props.contentInp} add={props.add} btn={props.btn}/>
        <Notes arr={props.arr} delete={props.delete} edit={props.edit}/>
    </div>
  )
}

export default Main