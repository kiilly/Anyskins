import styles from '../../styles/Home.module.css'
import Links from '../components/Links'
import Footer from '../components/footer'
import Password from '../components/passwordhide'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {PostUserData} from '../services/Users/UserService'


export default function Register() {
  return (
    <div>
      <Links />
      <div className={styles.backlogin}>
        <div className={styles.username}>Name</div>
        <div className={styles.bar1}>
          <input type="input" id="input" name="input"></input>
        </div>
        <div className={styles.username}>Age</div>
        <div className={styles.bar1}>
          <input type="input" id="input" name="input"></input>
        </div>
        <div className={styles.username}>email</div>
        <div className={styles.bar1}>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className={styles.username}>Password</div>
        <div className={styles.bar1}>
          <input type="password" id="input" name="input"></input>
        </div>
        <div className={styles.signin}>
          <button className="signin">
            Sign up
          </button>
        </div>
      </div>
      <footer className={styles.footeracc}>
        <Footer />
      </footer>
    </div>
  )
}


