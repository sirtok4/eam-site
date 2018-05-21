import React from 'react'
import Link from 'gatsby-link'

import styles from './footer-menu.module.less'

const FooterMenu = () => (
  <ul className={styles.container}>
    <li>
      <div>
        <h6><Link className={styles.main} to='/about-empire'>About Empire</Link></h6>
        <Link className={styles.sub} to='/about-empire#OurPhilosophy'>Our Philosophy</Link>
        <Link className={styles.sub} to='/about-empire#RelationshipsMatter'>Relationships Matter</Link>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/brokerage'>Brokerage</Link></h6>
        <Link className={styles.sub} to='/brokerage#TransactionalBrokerage'>Transactional Brokerage</Link>
        <Link className={styles.sub} to='/brokerage#ResearchSalesAndTrading'>Institutional Research, Sales &amp; Trading</Link>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/asset-management'>Asset Management</Link></h6>
        <Link className={styles.sub} to='/asset-management#FinancialPlanning'>Financial Planning</Link>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/investment-banking'>Investment Banking</Link></h6>
        <Link className={styles.sub} to='/investment-banking#CapitalMarkets'>Capital Markets</Link>
        <Link className={styles.sub} to='/investment-banking#Syndicate'>Syndicate</Link>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/login'>Account Login</Link></h6>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/join-our-team'>Join Our Team</Link></h6>
      </div>
    </li>
    <li>
      <div>
        <h6><Link className={styles.main} to='/contact-us'>Contact Us</Link></h6>
      </div>
    </li>
  </ul>
)

FooterMenu.displayName = 'FooterMenu'
export default FooterMenu
