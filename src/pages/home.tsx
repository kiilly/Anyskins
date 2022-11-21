import type { NextPage } from 'next'
import { SetStateAction, useState } from 'react'
import Link from 'next/link';


const skin: NextPage = () =>{
  const [username, setUsername] = useState('yanis')
  const handleOnchange = (username) => {
    setUsername(username);
  }
    return (
    <div>
      <h1>Username : {username}</h1>
      <button onClick={() => handleOnchange ("abdou") }>change username</button>
      <Link href="/page1">Back to home</Link>
    </div>
  )
}
export default skin
