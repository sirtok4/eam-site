import React from 'react'

import styles from './button-group.module.less'

const Buttons = ({ a, b, x, y }) => (
  <div className={styles.container}>
    <button onClick={a.onClick} value={a.value} className={a.isActive ? styles.active : styles.inactive}>{a.label}</button>
    <button onClick={a.onClick} value={b.value} className={b.isActive ? styles.active : styles.inactive}>{b.label}</button>
    <button onClick={a.onClick} value={x.value} className={x.isActive ? styles.active : styles.inactive}>{x.label}</button>
    <button onClick={a.onClick} value={y.value} className={y.isActive ? styles.active : styles.inactive}>{y.label}</button>
  </div>
)

export default Buttons
