import React from 'react'
import Link from 'gatsby-link'

import styles from './footer-menu.module.less'

const FooterMenu = () => (
  <ul className={styles.container}>
    <li>
      <div>
        <Link className={styles.main} to='#'>About Empire</Link>
        <Link className={styles.sub} to='#'>Our Philosophy</Link>
        <Link className={styles.sub} to='#'>Relationships Matter</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Brokerage</Link>
        <Link className={styles.sub} to='#'>Transactional Brokerage</Link>
        <Link className={styles.sub} to='#'>Institutional Research, Sales &amp; Trading</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Asset Management</Link>
        <Link className={styles.sub} to='#'>Financial Planning</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Investment Banking</Link>
        <Link className={styles.sub} to='#'>Capital Markets</Link>
        <Link className={styles.sub} to='#'>Syndicate</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Account Login</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Join Our Team</Link>
      </div>
    </li>
    <li>
      <div>
        <Link className={styles.main} to='#'>Contact Us</Link>
      </div>
    </li>
  </ul>
)

FooterMenu.displayName = 'FooterMenu'
export default FooterMenu
