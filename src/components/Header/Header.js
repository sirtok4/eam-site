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
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPBSVMVR');</script>
<!-- End Google Tag Manager -->
)

export default Header
