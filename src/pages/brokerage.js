import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/mfg-brokerage-1@2x.png'
import banner2 from '../../assets/images/mfg-brokerage-2@2x.png'

import styles from './brokerage.module.less'

const Brokerage = () => (
  <div className={styles.brokerageContainer}>
    <Buttons
      x={{ label: 'Transactional Brokerage', location: '#' }}
      y={{ label: 'Institutional Research, Sales, and Trading', location: '#' }}
    />

    <Banner src={banner1} />

    <div className={styles.callout}>
      Plan, track, and execute securities transactions in markets around the world, using a broad array of equity and debt instruments.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate officiis animi illo voluptatem voluptatum quos sapiente aliquam est quaerat error rem deserunt, iure, neque suscipit, iste itaque voluptas vitae batae.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime at veritatis optio ducimus magni ea magnam aliquid numquam, cumque sequi repudiandae quisquam cupiditate sed rerum voluptatum aspernatur eaque iusto ratione quasi. Dolore laboriosam cum, unde quod laudantium consequatur dolor.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam. Quis, eum ipsam pariatur at corrupti optio magnam animi reiciendis, aliquam quaerat voluptates consequatur! Laudantium totam quisquam error repellat consequuntur, quos impedit explicabo sunt minima.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo quos commodi, sed sit autem nobis, quo ullam error repellendus velit! Eaque quas molestiae distinctio nesciunt consequatur. Consequatur quo, temporibus doloremque, corporis ab rem voluptate nam beatae porro earum quaerat.</p>
        </div>
        <div className={styles.section}>
          <p>To find out more about our services, please contact us.</p>
        </div>
      </div>
    </div>

    <Banner src={banner2} />

    <div className={styles.callout}>
      Our goal is to build long-term relationships by delivering attentive service along with experience, insight and market knowledge.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate officiis animi illo voluptatem voluptatum quos sapiente aliquam est quaerat error rem deserunt, iure, neque suscipit, iste itaque voluptas vitae batae.</p>
        </div>
        <div className={styles.section}>
          <h4>Sales</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime at veritatis optio ducimus magni ea magnam aliquid numquam, cumque sequi repudiandae quisquam cupiditate sed rerum voluptatum aspernatur eaque iusto ratione quasi. Dolore laboriosam cum, unde quod laudantium consequatur dolor.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Trading</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam. Quis, eum ipsam pariatur at corrupti optio magnam animi reiciendis, aliquam quaerat voluptates consequatur! Laudantium totam quisquam error repellat consequuntur, quos impedit explicabo sunt minima.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo quos commodi, sed sit autem nobis, quo ullam error repellendus velit! Eaque quas molestiae distinctio nesciunt consequatur. Consequatur quo, temporibus doloremque.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Brokerage
