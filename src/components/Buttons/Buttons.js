import React from 'react'

import styles from './buttons.module.less'

const Buttons = () => (
  <div className={styles.container}>
    <button className={styles.blue}><a href='#'>Our Philosophy</a></button>
    <button className={styles.gray}><a href='#'>Relationships Matter</a></button>
  </div>
)

Buttons.displayName = 'Buttons'
export default Buttons
