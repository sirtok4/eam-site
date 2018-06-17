import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import styles from './login.module.less'

import banner1 from '../../assets/images/account-login/mfg-account_login-dark-min.png'

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
        <a
          className={styles.button}
          href="https://www.investor-connect.com/WMConnect/ConnectWeb/signin/Signin.invoke"
          target="_blank"
        >
          <button className={styles.submit}>
            <span>Go to Investor Connect</span>
          </button>
        </a>
      </div>
    </div>
  </div>
)

export default Login
