import React from 'react'
import FooterMenu from './components/FooterMenu/FooterMenu'
import FinePrint from './components/FinePrint/FinePrint'

import styles from './footer.module.less'

const Footer = () => (
  <div className={styles.container}>
    <FooterMenu />
    <FinePrint />
  </div>
)

Footer.displayName = 'Footer'
export default Footer
