import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'
import { useEffect, useState } from 'react';
import {fetchOrdersData} from '../services/Orders/OrderService'



export default function Order() {const [data, setData] = useState()
    useEffect(() => {
      fetchOrdersData().then((data) => {
        setData(data)
      })
    }, [])

    return (
    <div>
      <Links />
        <footer className={styles.footeracc}>
          <Footer />
        </footer>
    </div>
    )
  }


