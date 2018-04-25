import React from 'react'
import Link from 'gatsby-link'

import styles from './menu.module.less'

const Menu = () => (
  <ul className={styles.container}>
    <li><Link to='#'>About Empire</Link></li>
    <li><Link to='#'>Brokerage</Link></li>
    <li><Link to='#'>Asset Management</Link></li>
    <li><Link to='#'>Investment Banking</Link></li>
    <li><Link to='#'>Account Login</Link></li>
    <li><Link to='#'>Join Our Team</Link></li>
    <li><Link to='#'>Contact Us</Link></li>
  </ul>
)

Menu.displayName = 'Menu'
export default Menu