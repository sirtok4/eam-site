import React from 'react'
import Link from 'gatsby-link'
import Image from '../Images/Image'

import photo1 from '../../../assets/images/landing/mfg-homepage-min.png'
import photo2 from '../../../assets/images/landing/sfg-homepage-brokerage-base-min.png'
import photo3 from '../../../assets/images/landing/sfg-homepage-asset_management-base-min.png'
import photo4 from '../../../assets/images/landing/sfg-homepage-investment_banking-base-min.png'
import brokerCheck from '../../../assets/images/landing/FINRA BrokerCheck - Base@2x-min.png'

import styles from './landing.module.less'

const Landing = () => (
  <div className={styles.container}>
    <div className={styles.brokercheck}>
      <a href='https://brokercheck.finra.org/' target='_blank'><img className={styles.logo} src={brokerCheck} /></a>
    </div>
    <div className={styles.hero}>
      <Image src={photo1} caption='Build With Us.' />
    </div>
    <div className={styles.group3}>
      <Link to='/brokerage'><Image src={photo2} caption='Brokerage' /></Link>
      <Link to='/asset-management'><Image src={photo3} caption='Asset Management' /></Link>
      <Link to='/investment-banking'><Image src={photo4} caption='Investment Banking' /></Link>
    </div>
  </div>
)

Landing.displayName = 'Landing'
export default Landing
