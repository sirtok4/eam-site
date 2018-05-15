import React from 'react'

import styles from './image.module.less'

const Image = ({ src, caption }) => (
  <div className={styles.imageContainer}>
    <img src={src} />
    <div className={styles.caption}>{caption}</div>
  </div>
)

Image.displayName = 'Image'
export default Image
