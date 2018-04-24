import React from 'react'
import Link from 'gatsby-link'
import MainLogo from './components/MainLogo/MainLogo'
import Menu from './components/Menu/Menu'

import styles from './header.module.less'

const Header = () => (
  <div className={styles.container}>
    <MainLogo />
    <Menu />
  </div>
)

export default Header
