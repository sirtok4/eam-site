import React from 'react'
import Link from 'gatsby-link'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import Content from '../components/ClientsRights/PrivacyPolicy'

import styles from './clients-rights.module.less'

const PrivacyPolicy = () => (
  <div className={styles.clientsRightsContainer}>
    <ButtonGroup
      a={{ label: 'Clients Rigths & Protections', to: '/clients-rights', isActive: false }}
      b={{ label: 'Business Continuity Plan', to: '/business-continuity-plan', isActive: false }}
      x={{ label: 'Privacy Policy', to: '/privacy-policy', isActive: true }}
      y={{ label: '606 Reports / Form CRS', to: '/reporting', isActive: false }}
    />
    <div className={styles.stdContent}>
      <Content />
    </div>
  </div>
)

export default PrivacyPolicy
