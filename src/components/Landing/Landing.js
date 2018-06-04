import React from 'react'
import Link from 'gatsby-link'
import Image from '../Images/Image'
import photo1 from '../../../assets/images/mfg-homepage@2x.png'

import photo2 from '../../../assets/images/sfg-homepage-brokerage-base.png'
import photo3 from '../../../assets/images/sfg-homepage-asset_management-base.png'
import photo4 from '../../../assets/images/sfg-homepage-investment_banking-base.png'

import brokerCheck from '../../../assets/images/FINRA_BrokerCheck-Base.svg'

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
