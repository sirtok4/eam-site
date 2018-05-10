import React from 'react'

import styles from './buttons.module.less'

const Buttons = ({ x, y }) => (
  <div className={styles.container}>
    <button className={styles.blue}><a href={x.location}>{x.label}</a></button>
    <button className={styles.gray}><a href={y.location}>{y.label}</a></button>
  </div>
)

Buttons.displayName = 'Buttons'
export default Buttons
