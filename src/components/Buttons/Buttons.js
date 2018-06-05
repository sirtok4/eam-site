import React from 'react'

import styles from './buttons.module.less'

const Buttons = ({ x, y }) => (
  <div className={styles.container}>
    <a href={x.location}><button className={styles.blue}>{x.label}</button></a>
    <a href={y.location}><button className={styles.gray}>{y.label}</button></a>
  </div>
)

export default Buttons
