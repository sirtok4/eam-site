import React from 'react'
import logo from './tempLogo.png'

import styles from './main-logo.module.less'

const MainLogo = () => (
  <div className={styles.container}>
    <img src={logo} />
  </div>
)

MainLogo.displayName = 'MainLogo'
export default MainLogo
