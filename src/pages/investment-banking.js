import React from 'react'
import Banner from '../components/Images/Banner/Banner'
import Buttons from '../components/Buttons/Buttons'

import banner1 from '../../assets/images/mfg-investment_banking-1@2x.png'
import banner2 from '../../assets/images/mfg-investment_banking-2@2x.png'
import styles from './investment-banking.module.less'

const InvestmentBanking = () => (
  <div className={styles.investmentBankingContainer}>
    <Buttons
      x={{
        location: '#CapitalMarkets',
        label: 'Capital Markets'
      }}
      y={{
        location: '#Syndicate',
        label: 'Syndicate'
      }}
    />

    <a id='CapitalMarkets' className={styles.topAnchor} />
    <Banner src={banner1} caption='Take Charge And Deliver' />

    <div className={styles.callout}>
      Reach a wider spectrum of investors through our experience in corporate financing, with particular strength in the medical and biotech industries.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>At Empire, we are committed to the highest standards of integrity and service in providing investment banking services to both publicly and privately held businesses.  As an entrepreneurial firm, we take great pride in being an advisor that provides objective and independent ideas specifically developed for a client’s long-term needs.  We approach each engagement as an opportunity to establish a long lasting partnership that will endure well beyond the immediacy of the transaction.</p>
        </div>
        <div className={styles.section}>
          <p>Our scope of Investment Banking Services include:</p>
          <ul>
            <li>
              <p>Corporate Advisory Services</p>
            </li>
            <li>
              <p>Private Placements - Equity and/or Debt</p>
            </li>
            <li>
              <p>Merger &amp; Acquisition Services</p>
            </li>
            <li>
              <p>Capital Markets Strategic Evaluation</p>
            </li>
            <li>
              <p>Shareholder Value Assessments</p>
            </li>
            <li>
              <p>Transaction Examination</p>
            </li>
            <li>
              <p>Recapitalizations &amp; Rights Offerings</p>
            </li>
            <li>
              <p>Divestitures &amp; Spin-Offs</p>
            </li>
            <li>
              <p>Valuation &amp; Fairness Assistance</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Capital Markets</h4>
          <p>Capital markets investing offers the potential for exceptional returns, along with unique risk issues. Due diligence is just part of the equation. Your brokerage partner must also have a thorough grasp of how the markets work, a strong network of dealer relationships across many trading disciplines, up-to-date market information, and an understanding of regulatory issues.</p>
        </div>
        <div className={styles.section}>
          <p>Through our network, Empire Asset Management can offer you access to capital markets investments selected for their potential and their fit with your needs.</p>
        </div>
        <div className={styles.section}>
          <p>At Empire, we specialize in giving our clients the kind of personal attention that many big brokerage firms have forgotten. Your Empire financial advisor will take charge of assessing your objectives and delivering relevant capital markets opportunities for your consideration.</p>
        </div>
        <div className={styles.section}>
          <p>To learn more about our brokerage services, please contact us.</p>
        </div>
      </div>
    </div>

    <a id='Syndicate' />
    <Banner src={banner2} caption='Above-Average Growth Opportunities' />

    <div className={styles.callout}>
      Our exceptional long-term relationships with major institutional banking firms allow us to participate in a variety of syndicate issues with a potential for significant growth.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>For those investors searching for the opportunity to participate in issues which may result in above-average growth opportunities, Empire Asset Management offers access to new and secondary equity offerings.</p>
        </div>
        <div className={styles.section}>
          <p>Our exceptional long-term relationships with major institutional banking firms allow us to participate in a variety of syndicate issues with the potential for significant growth.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>At Empire, you can take advantage of our recognized expertise and thorough due diligence to invest in IPOs and secondary offerings. At the same time, you will benefit from Empire’s outstanding service. We believe in treating clients with a level of attention and responsiveness that results in long-term relationships.</p>
        </div>
        <div className={styles.section}>
          <p>For more information about our syndicate services, please contact us.</p>
        </div>
      </div>
    </div>
  </div>
)

export default InvestmentBanking
