import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/mfg-about_empire-1.png'
import banner2 from '../../assets/images/mfg-about_empire-2.png'

import styles from './about-empire.module.less'

const AboutEmpire = () => (
  <div className={styles.pageContainer}>
    <Buttons
      x={{ label: 'Our Philosophy', location: '#' }}
      y={{ label: 'Relationships Matter', location: '#' }}
    />
    <Banner src={banner1} />
    <div className={styles.callout}>We provide a wide range of investing, banking, financial advisory and management services through our high net worth individual, corporate and institutional client base.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <h4>People</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque eos? Nemo voluptatum tempore laborum labore exercitationem dicta pariatur harum autem corporis incidunt! Quae sit placeat tempora ut, aspernatur labore ipsum officia atque alias cumque culpa, magnam ullam saepeet.</p>
        </div>
        <div className={styles.section}>
          <h4>Background</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime at veritatis optio ducimus magni ea magnam aliquid numquam, cumque sequi repudiandae quisquam cupiditate sed rerum voluptatum aspernatur eaque iusto ratione quasi. Dolore laboriosam cum, unde quod laudantium consequatur dolor minima magnam mollitia ipsa enim sapiente sed ducimus laborum.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Capabilities</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error dolorum magni accusantium eius sint id officiis maiores voluptate quaerat modi nostrum laborum, alias voluptas impedit qui necessitatibus libero quidem recusandae corrupti delectus aperiam perferendis reprehenderit? Ad eaque, veritatis, odit sapiente perspiciatis explicabo libero corporis cupiditate culpa ea et aut quo, illum doloribus. Laboriosam maxime incidunt ipsa velit omnis asperiores.</p>
        </div>
      </div>
    </div>
    <Banner src={banner2} />
    <div className={styles.callout}>At Empire, we are committed to a distinctive way of doing business and an unshakable emphasis on long-term client relationships.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime modi quo dignissimos at ea ipsa blanditiis quam optio saepe fuga sint ratione nisi excepturi necessitatibus, accusamus quisquam assumenda nemo ab adipisci laborum enim beatae. Cupiditate hic expedita labore, ad officia consectetur. Eveniet ipsa vitae dolorum ratione assumenda consectetur culpa fuga in, repellat ea est fugit cumque ipsam quia repellendus.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia ab delectus? Ex aliquid qui quis provident consequuntur quaerat eius ipsam, impedit maxime ea incidunt maiores, enim quidem. Perspiciatis facilis pariatur ipsam odio amet maxime vero fuga placeat officia quo.</p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutEmpire
