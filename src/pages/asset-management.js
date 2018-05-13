import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/mfg-asset_management@2x.png'
import styles from './asset-management.module.less'

const AssetManagement = () => (
  <div className={styles.assetManagementContainer}>
    <Banner src={banner1} />
    <div className={styles.callout}>
      Every investment plan is customized based on a thorough assessment of each client's unique golas, needs and appetite for risk while remaining cognizant of the changing market environment.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <h4>Customized Solutions</h4>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate officiis animi illo voluptatem voluptatum quos sapiente aliquam est quaerat error rem deserunt, iure, neque suscipit, iste itaque voluptas vitae batae.</p>
        </div>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime at veritatis optio ducimus magni ea magnam aliquid numquam, cumque sequi repudiandae quisquam cupiditate sed rerum voluptatum aspernatur eaque iusto ratione quasi.</p>
        </div>
        <div className={styles.section}>
          <p>Our full range of options include:</p>
          <ul>
            <li>
              <p>Separately managed accounts</p>
            </li>
            <li>
              <p>Multi-Manager Accounts</p>
            </li>
            <li>
              <p>Unified Managed Accounts</p>
            </li>
            <li>
              <p>Mutual Fund Strategies</p>
            </li>
            <li>
              <p>ETF Strategies</p>
            </li>
            <li>
              <p>Alternative Investments</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <h4>Identifying Your Goals</h4>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam. Quis, eum ipsam pariatur at corrupti optio magnam animi reiciendis, aliquam quaerat voluptates consequatur! Laudantium totam quisquam error repellat consequuntur, quos impedit explicabo sunt minima.</p>
        </div>
        <div className={styles.section}>
          <h4>Developing Your Investment Strategy</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo quos commodi, sed sit autem nobis, quo ullam error repellendus velit! Eaque quas molestiae distinctio nesciunt consequatur. Consequatur quo, temporibus doloremque, corporis ab rem voluptate nam beatae porro earum quaerat.</p>
        </div>
        <div className={styles.section}>
          <h4>Your Investment Plan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam possimus est maiores natus. Totam, officiis perspiciatis iure quo consequatur commodi eos, cum itaque distinctio, adipisci numquam atque ex optio!</p>
        </div>
        <div className={styles.section}>
          <h4>Monitoring Your Portfolio</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam possimus est maiores natus. Totam, officiis perspiciatis iure quo consequatur commodi eos, cum itaque distinctio, adipisci numquam atque ex optio!</p>
        </div>
      </div>
    </div>
  </div>
)

export default AssetManagement
