import React from 'react'
import Link from 'gatsby-link'
import MainLogo from './components/MainLogo/MainLogo'
import Menu from '../Menu/Menu'

import styles from './header.module.less'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logoAndMenu}>
      <MainLogo />
      <Menu />
    </div>
  </div>
)

export default Header
