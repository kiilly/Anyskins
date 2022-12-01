import styles from '../../styles/Home.module.css'
import Links from '../components/Links'
import Footer from '../components/footer'
import Password from '../components/passwordhide'
import Link from 'next/link';


export default function Account() {
  return (
    <div>
      <Links />
      <div className={styles.backlogin}>
        <div className={styles.username}>Username</div>
        <div className={styles.bar1}>
          <input type="input" id="input" name="input"></input>
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.bar2}>
          <Password></Password>
        </div>
        <div className={styles.login}>
          <button className="login">
            Log in
          </button>
          <div className={styles.password}>
            < Link href="/register">Create an account</Link>
            </div>
        </div>
      </div>
      <footer className={styles.footeracc}>
        <Footer />
      </footer>
    </div>
  )
}


