import React from 'react'
import Link from 'gatsby-link'
import logo from './tempLogo.png'

import styles from './main-logo.module.less'

const MainLogo = () => (
  <div className={styles.container}>
    <Link to='/'>
      <img src={logo} />
    </Link>
  </div>
)

MainLogo.displayName = 'MainLogo'
export default MainLogo
