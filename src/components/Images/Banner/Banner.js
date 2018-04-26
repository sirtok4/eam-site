import React from 'react'
import Image from '../Image'

import styles from './banner.module.less'

const Banner = ({ src }) => (
  <div className={styles.container}>
    <Image src={src} />
  </div>
)

export default Banner
