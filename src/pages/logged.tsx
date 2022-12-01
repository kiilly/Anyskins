import styles from '../../styles/Home.module.css'
import Links from '../components/Links'
import Footer from '../components/footer'


export default function Account() {
    
  return (
    <div>
      <Links />
      <div className={styles.backlogin}>
        <div className={styles.username}>Connecté</div>
      </div>
      <footer className={styles.footeracc}>
        <Footer />
      </footer>
    </div>
  )
}