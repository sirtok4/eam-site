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
    >
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js' />
    </Helmet>
    <div className={styles.mainContent}>
      <Header siteTitle='Empire Asset Management' />
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
