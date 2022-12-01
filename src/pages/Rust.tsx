import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'
import { useEffect, useState } from 'react';
import {fetchUsersData} from '../services/Users/UserService'
import {fetchProductsData} from '../services/Products/ProductService'



export default function Rust() {const [data, setData] = useState()
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

    return (
    <div>
      <Links />
      <div className={styles.componentontainer}>
      {data &&
       data.map((data,i) =>{
        if(data.CategoryId === 3){
        return(
        <div className={styles.card}>
        <div className={styles.focusru} key={data.id}>
            <Card title={data.name} description={data.price} />
        </div>
      </div>
        )
       }})}
       </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
    </div>
    )
  }


