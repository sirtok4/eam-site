import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'

// import banner1 from '../../assets/images/mfg-brokerage-1.png'
import banner1 from '../../assets/images/brokerage/mfg-brokerage-1-min.png'

// import banner2 from '../../assets/images/mfg-brokerage-2.png'
import banner2 from '../../assets/images/brokerage/mfg-brokerage-2-min.png'

import styles from './brokerage.module.less'

const Brokerage = () => (
  <div className={styles.brokerageContainer}>
    <Buttons
      x={{ label: 'Transactional Brokerage', location: '#TransactionalBrokerage' }}
      y={{ label: 'Institutional Research, Sales, and Trading', location: '#ResearchSalesAndTrading' }}
    />

    <a id='TransactionalBrokerage' className={styles.topAnchor} />
    <Banner src={banner1} caption='One-On-One Service' />

    <div className={styles.callout}>
      Plan, track, and execute securities transactions in markets around the world, using a broad array of equity and debt instruments.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>At Empire Asset Management, you can benefit from the same high level of investment ideas and research available at the largest brokerage houses, combined with the personal attention of a smaller, more client-focused investment firm.</p>
        </div>
        <div className={styles.section}>
          <p>We provide every client with the one-on-one service of a personal Empire financial advisor who will suggest investment ideas, respond promptly to your needs, questions, and instructions, and report on how your account is doing. Your financial advisor can also assist you with services like these:</p>
        </div>
        <div className={styles.section}>
          <ul>
            <li>
              <p>Access to the latest research and commentary on stocks, bonds, funds, and options</p>
            </li>
            <li>
              <p>Opportunities in private equity or capital markets</p>
            </li>
            <li>
              <p>Tax-advantage investments</p>
            </li>
            <li>
              <p>Retirement planning strategies</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>As an independent brokerage firm, we are not beholden to any fund family or investment bank. The ideas and suggestions we offer are product- and firm-agnostic, chosen with each client’s objectives and interests in mind.</p>
        </div>
        <div className={styles.section}>
          <p>But to us, good service is more than just professional investment-picking. As the past several years have shown, one of the key advantages of a full-service brokerage firm is having someone to guide you through market turbulence, helping you make good decisions and avoid bad ones. At Empire, we’re all about building relationships—not just portfolios.</p>
        </div>
        <div className={styles.section}>
          <p>To find out more about our brokerage services, please contact us.</p>
        </div>
      </div>
    </div>

    <a id='ResearchSalesAndTrading' />
    <Banner src={banner2} caption='Extensive Research And Analysis' />

    <div className={styles.callout}>
      Our goal is to build long-term relationships by delivering attentive service along with experience, insight and market knowledge.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>We bring our institutional investors a penetrating understanding of the markets, in-depth securities research and analysis, and a track record of exceptional service.</p>
        </div>
        <div className={styles.section}>
          <h4>Sales</h4>
          <p>Our seasoned sales team is comprised of industry veterans with extensive research and analysis experience. In reports and recommendations, we provide our clients with fundamental and technical profiles of growth companies throughout North America and Europe.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Trading</h4>
          <p>Our traders are exceptionally proficient in trading patterns of the growth stocks that are our specialty. We focus on individual industry sectors, which allow us to develop a deep knowledge of the companies and their markets. We execute on all major exchanges, including NYSE, NASDAQ, and OTC, et al.</p>
        </div>
        <div className={styles.section}>
          <p>At Empire, our goal is to build long-term relationships by delivering attentive service along with experience, insight and market knowledge. To learn more about our institutional services, please contact us.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Brokerage
