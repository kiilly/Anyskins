import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../components/card'
import Links from '../components/Links'
import Footer from '../components/footer'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <div>
      <Links />
      <div className="container-grid">
        <div className="wrapper">
          <Link href="/CS:GO">
            <div className="csgo"></div>
          </Link>
        </div>
        <div className="wrapper">
          <Link href="/RocketLeague">
            <div className="rocketleague"></div>
          </Link>
        </div>
        <div className="container-grid">
          <div className="wrapper">
            <Link href="/Rust">
              <div className="rust"></div>
            </Link>
          </div>
        </div>
        <div className="container-grid">
          <div className="wrapper">
            <Link href="/Valorant">
              <div className="valorant"></div>
            </Link>
          </div>
        </div>
        <footer className={styles.footeracc}>
          <Footer />
        </footer>
      </div>
    </div>
  )
}