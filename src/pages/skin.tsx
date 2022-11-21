import type { NextPage } from 'next'
import { SetStateAction, useState } from 'react'

const skin: NextPage = () =>{
  const [username, setUsername] = useState('yanis')
  const handleOnchange = (username) => {
    setUsername(username);
  }
    return (
    <div>
      <h1>Username : {username}</h1>
      <button onClick={() => handleOnchange ("abdou") }>change username</button>
    </div>
  )
}
export default skin
