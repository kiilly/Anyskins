import styles from '../../styles/Home.module.css'
import Links from '../components/Links'
import Footer from '../components/footer'
import Password from '../components/passwordhide'
import Link from 'next/link';
import {api} from '../services/ServiceHelper'
import { useRouter } from 'next/router'
import { getCookie, setCookie } from 'typescript-cookie'





export default function Account() {
    const navigate = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        const response = await api.get('http://localhost:3000/user/')
            
            response.data.map((us) =>{
                
                let user= document.querySelector('#user').value;
                let pwd= document.querySelector('#password').value;
                
                if(user===us.name && pwd===us.password)
                    {
                        document.querySelector('#form').reset();
                        setTimeout(() => {
                            navigate.push('/logged')
                        }, 1000);
                    }
                else{
                    alert('Vérifier username et password')
                }
            })

        
       
        }

  return (
    <div>
      <Links />
      <form id="form" onSubmit={handleSubmit} className={styles.backlogin}>
        <div className={styles.username}>Username</div>
        <div className={styles.bar1}>
          <input type="input" id="user" name="user"></input>
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
      </form>
      <footer className={styles.footeracc}>
        <Footer />
      </footer>
    </div>
  )
}