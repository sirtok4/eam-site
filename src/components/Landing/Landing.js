import React from 'react'
import Image from '../Images/Image'
import photo1 from '../../../assets/images/mfg-homepage@2x.png'

import photo2 from '../../../assets/images/sfg-homepage-brokerage-base.png'
import photo3 from '../../../assets/images/sfg-homepage-asset_management-base.png'
import photo4 from '../../../assets/images/sfg-homepage-investment_banking-base.png'

import styles from './landing.module.less'

const Landing = () => (
  <div className={styles.container}>
    <div className={styles.hero}>
      <Image src={photo1} caption='Build With Us.' />
    </div>
    <div className={styles.group3}>
      <Image src={photo2} />
      <Image src={photo3} />
      <Image src={photo4} />
    </div>
  </div>
)

Landing.displayName = 'Landing'
export default Landing
