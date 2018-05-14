import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/mfg-contact_us@2x.png'

import styles from './contact-us.module.less'

const ContactUs = () => (
  <div className={styles.contactUsContainer}>
    <Banner src={banner1} />

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <h2>Email Us</h2>
        <p>To find out if a relationship with Empire is right for you, please contact us today.</p>
        <div className={styles.section}>
          <div className={styles.field}>
            <label htmlFor='-name'>Full Name</label>
            <input id='name' name='name' type='text' />
          </div>

          <div className={styles.field}>
            <label htmlFor='company'>Company</label>
            <input id='company' name='company' type='text' />
          </div>

          <div className={styles.field}>
            <label htmlFor='email'>Email Address</label>
            <input id='email' name='email' type='email' />
          </div>


          <div className={styles.field}>
            <label htmlFor='questions-comments'>Questions / Comments</label>
            <textarea id='questions-comments' name='questions-comments' />
          </div>

          <div className={styles.field}>
            <button className={styles.submit}>Submit</button>
            <button className={styles.clear}>Clear</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Our Office</h2>
        <p>test</p>
        <div className={styles.section}>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs
