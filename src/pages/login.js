import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import styles from './login.module.less'
import lock from '../../assets/images/lock-close-fill.svg'
import banner1 from '../../assets/images/mfg-account_login@2x-dark.png'

const Lock = () => <img style={{ margin: '0 12px 0 0' }} src={lock} />

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
        <div className={styles.labelWithLink}>
          <label htmlFor='userId'>User ID</label>
          <a href='https://www.investor-connect.com/WMConnect/ConnectWeb/forgotpassword/RBCConnectForgotPasswordHelp.invoke' target='_blank'>User ID &amp; Password Help</a>
        </div>
        <input id='userId' name='userId' type='text' />
      </div>

      <div className={styles.field}>
        <div className={styles.labelWithLink}>
          <label htmlFor='password'>Password</label>
          <a href='https://www.investor-connect.com/WMConnect/ConnectWeb/forgotpassword/RBCConnectForgotPasswordView.invoke' target='_blank'>Forgot Password?</a>
        </div>
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
        <button className={styles.submit}>
          <Lock />
          <span>Sign In</span>
        </button>
      </div>

      <div className={styles.field}>
        <div className={styles.links}>
          <a href='https://www.investor-connect.com/WMConnect/ConnectWeb/registration/RBCConnectRegistrationView.invoke' target='_blank'>Need an Account? Register Now</a>
          <a href='http://www.rbcplayer.com/connect/cstour' target='_blank'>Investor Connect&reg; Tour</a>
        </div>
      </div>
    </div>
  </div>
)

export default Login
