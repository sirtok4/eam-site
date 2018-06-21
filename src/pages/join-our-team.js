import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/join-our-team/mfg-join_our_team-min.png'

import styles from './join-our-team.module.less'

const JoinOurTeam = () => (
  <div className={styles.joinOurTeamContainer}>
    <Banner src={banner1} caption='Teamwork And Collaboration' />

    <div className={styles.callout}>
      Our team provides the highest level of personal counsel. If you are smart, hardworking, and nice, we would like to meet with you.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <h4>Clients Come First</h4>
          <p>Most independent investment firms provide similar payouts. The real difference is the quality of the products and the level of service provided to your customers. At Empire, we recognize that servicing your clients is the most important thing you do, and servicing you is the most important thing we do.</p>
        </div>
        <div className={styles.section}>
          <h4>Products &amp; Services</h4>
          <p>Empire’s product offering is open architecture. Being part of our team gives you the latitude to select what is best for your client. Our in-house and direct relationships with leading equity/fixed income portfolio managers, alternative investments, Business Development Companies, Certified Financial Planning and Insurance Products allows you the confidence to meet any clients goals and needs.</p>
        </div>
        <div className={styles.section}>
          <h4>Build With Us</h4>
          <p>As an advisor, you're building value for your clients and practice every day. At Empire, we recognize that you have worked tirelessly, and that’s why we offer transparent payouts and pricing to improve your profitability. Empire will provide the scale and resources that allows you to grow your business with better client experiences.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Technology</h4>
          <p>Streamline your business and maximize building your client relationship through operational efficiencies. We are fully digital, so both you and your clients will begin realizing the benefits of a paperless office immediately. Your clients will be able to execute new account documents, perform a wire request, or execute an account transfer from any mobile device instantly.</p>
        </div>
        <div className={styles.section}>
          <h4>Transition Assistance</h4>
          <p>At Empire, you will find plenty of support. When joining our team, you will be welcomed by an experienced, dedicated conversion consultant to walk you through each step. We have become proficient in moving your book of business with the least impact to your clients. Because Empire is fully electronic, your clients will not face an overwhelming physical burden of new account agreements and transfer forms. Instead, they will receive a single email, which they can digitally execute from any mobile device in the world and start their journey to a better client relationship. Build with us!</p>
        </div>
      </div>
    </div>
  </div>
)

export default JoinOurTeam
