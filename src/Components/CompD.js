import React, {useContext} from 'react'
import { UserContext ,NewContext } from '../App'

const CompD = () => {
    const user = useContext(UserContext)
    const name = useContext(NewContext)
  return (
    <div>{name},{user}</div>
  )
}

export default CompD