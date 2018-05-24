import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/mfg-contact_us@2x.png'

import styles from './contact-us.module.less'

const handleReset = e => {
  e.preventDefault()
  document.getElementById('contact-form').reset()
}

const ContactUs = () => (
  <div className={styles.contactUsContainer}>
    <Banner src={banner1} caption='Build With Us.' />

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <h2>Email Us</h2>
        <p>To find out if a relationship with Empire is right for you, please contact us today.</p>
        <form id='contact-form' name='contact' method='POST' data-netlify='true'>
          <div className={styles.section}>
            <div className={styles.field}>
              <label htmlFor='name'>Full Name</label>
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
              <button className={styles.submit} type='submit'>Submit</button>
              <button className={styles.clear} onClick={handleReset}>Clear</button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <h2>Our Office</h2>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5385267733996!2d-74.01589668459518!3d40.70615997933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a173d1b444d%3A0x7775ebc6ec42bcd0!2sEmpire+Asset+Management!5e0!3m2!1sen!2sus!4v1527069949906" width="588" height="300" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
        </div>
        <div className={styles.section}>
          <div className={styles.address}>
            <div>
              <label>Address:</label>
              <p>29 Broadway</p>
              <p>12th Floor</p>
              <p>New York, NY 10006</p>
            </div>
            <div>
              <label>Phone:</label>
              <p>888.417.8050</p>
              <p>212.417.7777</p>
            </div>
            <div>
              <label>Email:</label>
              <p><a href='mailto:webmaster@example.com'>info@empiream.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs
