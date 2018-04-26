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
  </div>
)

export default AboutEmpire
