import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'

export default function Home() {
  return (
    <><div>
      <Links />
    </div>
    <div className='box'>
        <h1>test</h1>
    </div></>
  )
  
}