import React from 'react'
import { UserConsumer } from './UserContext'

const ComponentD = () => {
  return (
    <UserConsumer>
        {username=>{
            return <h1>Hello {username}</h1>
            }}
    </UserConsumer>
  )
}

export default ComponentD