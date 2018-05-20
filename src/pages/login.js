import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import styles from './login.module.less'
import banner1 from '../../assets/images/mfg-account_login@2x-dark.png'

const Login = () => (
  <div className={styles.loginContainer}>
    <Banner src={banner1} />
    <div className={styles.section}>
      <h2>Account Login</h2>
      <p>
        Access your account via Investor Connect&reg;. In addition to account
        updates, you also have access to your online documents, convenient
        financial tools, research, and more.
      </p>
      <div className={styles.field}>
        <label htmlFor='userId'>User ID</label>
        <input id='userId' name='userId' type='text' />
      </div>

      <div className={styles.field}>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' />
      </div>

      <div className={styles.field}>
        <div className={styles.checkboxField}>
          <input
            className={styles.rememberUserId}
            id='rememberUserId'
            name='rememberUserId'
            type='checkbox'
          />
          <label>Remember My User Id</label>
        </div>
      </div>

      <div className={styles.field}>
        {/* TODO: FIX LOCK ICON */}
        <button className={styles.submit}>&#x1F512; Sign In</button>
      </div>

      <div className={styles.field}>
        <div className={styles.links}>
          <a href='#'>Need an Account? Register Now</a>
          <a href='#'>Investor Connect Tour</a>
        </div>
      </div>
    </div>
  </div>
)

export default Login
