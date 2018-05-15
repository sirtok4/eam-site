import React from 'react'
import Image from '../Image'

import styles from './banner.module.less'

const Banner = ({ src, caption }) => (
  <div className={styles.container}>
    <Image src={src} caption={caption} />
  </div>
)

export default Banner
