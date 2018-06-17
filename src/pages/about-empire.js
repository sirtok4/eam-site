import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'
import Image from '../components/Images/Image'

// import banner1 from '../../assets/images/mfg-about_empire-1.png'
import banner1 from '../../assets/images/about/mfg-about_empire-1-min.png'

// import banner2 from '../../assets/images/mfg-about_empire-2.png'
import banner2 from '../../assets/images/about/mfg-about_empire-2-min.png'

// import partner1 from '../../assets/images/FINRA-Logo.png'
import partner1 from '../../assets/images/about/FINRA-Logo-min.png'

// import partner2 from '../../assets/images/MSRB-Logo.png'
import partner2 from '../../assets/images/about/MSRB-Logo-min.png'

// import partner3 from '../../assets/images/SIPC-Logo.png'
import partner3 from '../../assets/images/about/SIPC-Logo-min.png'

import styles from './about-empire.module.less'

const Partner = ({ name, src, children }) => (
  <div className={styles.partner}>
    <div className={styles.logo}>
      <Image src={src} />
    </div>
    <div className={styles.text}>
      <h4>{name}</h4>
      <p>{children}</p>
    </div>
  </div>
)

const AboutEmpire = () => (
  <div className={styles.pageContainer}>
    <Buttons
      x={{ label: 'Our Philosophy', location: '#OurPhilosophy' }}
      y={{ label: 'Relationships Matter', location: '#RelationshipsMatter' }}
    />
    <a id='OurPhilosophy' className={styles.topAnchor} />
    <Banner src={banner1} caption='Clients Come First.' />
    <div className={styles.callout}>We provide a wide range of investing, banking, financial advisory and management services through our high net worth individual, corporate and institutional client base.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <h4>People</h4>
          <p>Led by an executive team comprised of Wall Street veterans, our accomplished financial professionals work closely with our clients to innovate and implement effective, goal-focused solutions.</p>
        </div>
        <div className={styles.section}>
          <h4>Background</h4>
          <p>Established as a FINRA member in 2007, Empire Asset Management initially focused on guiding influential investors to value-added private placements, IPOs, secondary and debt offerings. Emerging stronger from market events that brought down many brokerage firms, Empire today serves thousands of clients across the U.S. and abroad. Our philosophy that clients come first has been a key part of our success, then and now.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Capabilities</h4>
          <p>Empire’s brokerage capabilities allow clients to plan, execute, and track securities transactions in markets around the world, using a broad array of equity and debt instruments. As an asset manager, we help clients take advantage of private investment opportunities, with emphasis on risk management, global diversification, and customized portfolio modeling. Companies and institutions can reach a wider spectrum of investors through our investment banking expertise, with particular strength in the medical and biotech industries.</p>
        </div>
      </div>
    </div>
    <a id='RelationshipsMatter' />
    <Banner src={banner2} caption='Rock Solid Relationships' />
    <div className={styles.callout}>At Empire, we are committed to a distinctive way of doing business and an unshakable emphasis on long-term client relationships.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>At Empire, we are committed to a distinctive way of doing business and an unshakable emphasis on long-term client relationships. We promise a personalized experience in serving our clients best interests based on their unique needs and objectives. Our goal is to provide a sound investment plan by employing an objective driven practice where we get to really know and understand our clients’ financial commitments, circumstances, needs and objectives in order to select the most suitable solutions to help achieve their investment goals.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>Our commitment does not end with an investment. Our financial professionals are dedicated to the progress of each portfolio and to ensure that clients’ understand how they are tracking toward their goals. Through attentive service and reliable access, we work hard to make sure that our clients experience a high-touch service that is responsive to their evolving needs.</p>
        </div>
      </div>
    </div>
    <div className={styles.partners}>
      <Partner name='FINRA' src={partner1}>
        FINRA is dedicated to investor protection and market integrity through effective and efficient regulation of broker-dealer.
      </Partner>

      <Partner name='MSRB' src={partner2}>
        The MSRB protects investors, state and local governments, and the public interest, by promoting a fair and efficient municipal securities market.
      </Partner>

      <Partner name='SICP' src={partner3}>
        The SICP oversees the liquidation of member broker-dealers that close when the broker-dealer is bankrupt or in financial trouble, and the customer assets are missing.
      </Partner>
    </div>
  </div>
)

export default AboutEmpire
