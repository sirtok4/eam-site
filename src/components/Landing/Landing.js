import React from 'react'
import Image from '../Images/Image'
import tempPhoto from './tempPhoto.jpeg'

import styles from './landing.module.less'

const Landing = () => (
  <div className={styles.container}>
    <div className={styles.hero}>
      <Image src={tempPhoto} />
    </div>
    <div className={styles.group3}>
      <Image src={tempPhoto} />
      <Image src={tempPhoto} />
      <Image src={tempPhoto} />
    </div>
  </div>
)

Landing.displayName = 'Landing'
export default Landing
