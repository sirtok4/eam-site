import React from 'react'
import Link from 'gatsby-link'
import MainLogo from './components/MainLogo/MainLogo'
import Menu from '../Menu/Menu'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

import styles from './header.module.less'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logoAndMenu}>
      <MainLogo />
      <Menu />
      <HamburgerMenu />
    </div>
  </div>
)

export default Header
