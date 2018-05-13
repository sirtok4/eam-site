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
        location: '#',
        label: 'Capital Markets'
      }}
      y={{
        location: '#',
        label: 'Syndicate'
      }}
    />

    <Banner src={banner1} />

    <div className={styles.callout}>
      Reach a wider spectrum of investors through our experience in corporate financing, with particular strength in the medical and biotech industries.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo quae quod ipsum commodi neque similique ullam ipsam id quas, voluptate totam dignissimos. Esse enim ex dolorum, adipisci numquam tempore rerum quasi provident dolores blanditiis placeat consequuntur pariatur, sint aperiam animi! Voluptates nostrum maiores doloribus ex obcaecati officia totam ad.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam. Quis, eum ipsam pariatur at corrupti optio magnam animi reiciendis, aliquam quaerat voluptates consequatur! Laudantium totam quisquam error repellat consequuntur, quos impedit explicabo sunt minima.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur sunt doloremque a nostrum error, adipisci, magni atque iure odio ex dolor, vero dolorem alias.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia id reiciendis ipsum mollitia saepe eius quos perspiciatis soluta repudiandae veritatis reprehenderit itaque, quod doloribus est! Fugiat sapiente totam nobis.</p>
        </div>
        <div className={styles.section}>
          <p>To learn more about our brokerage serviecs, please contact us.</p>
        </div>
      </div>
    </div>

    <Banner src={banner2} />

    <div className={styles.callout}>
      Our exceptional long-term relationships with major institutional banking firms allow us to participate in a variety of syndicate issues with a potential for significant growth.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sapiente officiis id fuga quod. Commodi exercitationem quidem suscipit, iusto unde modi, repellat quia officiis velit hic numquam laboriosam ex asperiores nulla. Iusto, ad expedita.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate praesentium eveniet quas consequuntur esse est minima, ducimus eaque cumque.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe doloremque quis expedita placeat iure iste debitis dolores fugit et, quas omnis repellat delectus eveniet iusto est officiis odio, sint dolorum labore. Impedit animi voluptatibus eum voluptates cum! Labore, accusantium.</p>
        </div>
        <div className={styles.section}>
          <p>To learn more about our syndicate serviecs, please contact us.</p>
        </div>
      </div>
    </div>
  </div>
)

export default InvestmentBanking
