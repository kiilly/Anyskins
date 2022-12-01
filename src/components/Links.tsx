import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Links() {
    return (    
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
          <h1><Link href="/"><img src="Anyskins.png" id='logo'/></Link></h1> 
          <h1><Link href="/CS:GO">CS:GO</Link></h1> 
          <h1><Link href="/RocketLeague">Rocket League</Link></h1> 
          <h1><Link href="/Rust">Rust</Link></h1>
          <h1><Link href="/Valorant">Valorant</Link></h1>
          <h1><Link href="/account"><img src="account.png" id='account' /></Link></h1>
          <h1><Link href="/orders"><img src="panier.png" id='order' /></Link></h1>
          </div>
        </main>
      </div>
    )
  }