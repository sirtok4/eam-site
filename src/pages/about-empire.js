import React from 'react'
import Link from 'gatsby-link'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'

import tempPhoto from '../components/Landing/tempPhoto.jpeg'

import styles from './about-empire.module.less'

const AboutEmpire = () => (
  <div className={styles.container}>
    <Buttons />
    <Banner src={tempPhoto} />
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <h4>People</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque eos? Nemo voluptatum tempore laborum labore exercitationem dicta pariatur harum autem corporis incidunt! Quae sit placeat tempora ut, aspernatur labore ipsum officia atque alias cumque culpa, magnam ullam saepeet.</p>
        </div>
        <div className={styles.section}>
          <h4>Backgrounnd</h4>
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
    <Banner src={tempPhoto} />
  </div>
)

export default AboutEmpire
