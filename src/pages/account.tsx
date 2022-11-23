import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'


export default function Account() {
    return (
    <div>
        <Links />
        <div className={styles.backlogin}>
        <div className={styles.bar1}>
            <input type="email" id="email" name="email"></input>
        </div>
        <div className={styles.bar2}>
            <input type="email" id="email" name="email"></input>
        </div>
        </div>
        <footer className={styles.footer}>
            <Footer />
        </footer>
    </div>
    )
  }
