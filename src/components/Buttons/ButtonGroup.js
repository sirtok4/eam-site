import React from 'react'
import Link from 'gatsby-link'

import styles from './button-group.module.less'

const Buttons = ({ a, b, x, y }) => (
  <div className={styles.container}>
    <Link to={a.to}><button onClick={a.onClick} value={a.value} className={a.isActive ? styles.active : styles.inactive}>{a.label}</button></Link>
    <Link to={b.to}><button onClick={a.onClick} value={b.value} className={b.isActive ? styles.active : styles.inactive}>{b.label}</button></Link>
    <Link to={x.to}><button onClick={a.onClick} value={x.value} className={x.isActive ? styles.active : styles.inactive}>{x.label}</button></Link>
    <Link to={y.to}><button onClick={a.onClick} value={y.value} className={y.isActive ? styles.active : styles.inactive}>{y.label}</button></Link>
  </div>
)

export default Buttons
