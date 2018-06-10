import React from 'react'

import styles from './button-group.module.less'

const Buttons = ({ a, b, x, y }) => (
  <div className={styles.container}>
    <a href={a.location}><button className={styles.blue}>{a.label}</button></a>
    <a href={b.location}><button className={styles.gray}>{b.label}</button></a>
    <a href={x.location}><button className={styles.blue}>{x.label}</button></a>
    <a href={y.location}><button className={styles.gray}>{y.label}</button></a>
  </div>
)

export default Buttons
