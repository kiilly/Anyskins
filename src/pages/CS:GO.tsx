import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'
import { useEffect, useState } from 'react';
import {fetchUsersData} from '../services/Users/UserService'




export default function Csgo() {const [data, setData] = useState()
  useEffect(() => {
    fetchUsersData().then((data) => {
      console.log(data)
      setData(data)
    })
  }, [])

    return (
    <div>
      {data &&
       data.map((data,i) =>{
        return(
          <div key={data.id}>
            <Card title={data.name} description={data.email} />
          </div>
        )
       })}
      <Links />
        <footer className={styles.footer}>
          <Footer />
        </footer>
    </div>
    )
  }


