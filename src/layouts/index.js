import 'babel-polyfill'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from './layout.module.less'

const Layout = ({ children, data }) => (
  <div className={styles.mainContainer}>
    <Helmet
      title='Empire Asset Management'
    />
    <Header siteTitle='Empire Asset Management' />
    <div className={styles.mainContent}>
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
