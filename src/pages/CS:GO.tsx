import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'


export default function Csgo() {
    return (<div>
    <Links />
      <div className={styles.boxcontainer}>
          <div className={styles.box}>
            <div className={styles.item}>One</div>
            <div className={styles.item}>Two</div>
            <div className={styles.item}>Three</div>
            <div className={styles.item}>Four</div>
            <div className={styles.item}>Five</div>
            <div className={styles.item}>Six</div>
          </div>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </div>
    </div>)
  }


