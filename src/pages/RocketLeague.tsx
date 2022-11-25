import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Link from 'next/link';
import Links from '../components/Links'
import Footer from '../components/footer'


export default function Rocket() {
    return (
    <div>
      <Links />
        <footer className={styles.footer}>
          <Footer />
        </footer>
    </div>
    )
  }


