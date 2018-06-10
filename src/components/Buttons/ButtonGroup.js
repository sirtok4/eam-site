import React from 'react'

import styles from './button-group.module.less'

const Buttons = ({ a, b, x, y }) => (
  <div className={styles.container}>
    <a><button onClick={a.onClick} value={a.value} className={styles.active}>{a.label}</button></a>
    <a><button onClick={a.onClick} value={b.value} className={styles.inactive}>{b.label}</button></a>
    <a><button onClick={a.onClick} value={x.value} className={styles.inactive}>{x.label}</button></a>
    <a><button onClick={a.onClick} value={y.value} className={styles.inactive}>{y.label}</button></a>
  </div>
)

export default Buttons
