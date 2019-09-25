import React, { Component } from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import Content from '../components/ClientsRights/ClientsRightsContent'

import styles from './clients-rights.module.less'

const ClientsRights = () => (
  <div className={styles.clientsRightsContainer}>
    <ButtonGroup
      a={{ label: 'Clients Rights & Protections', to: '/clients-rights', isActive: true }}
      b={{ label: 'Business Continuity Plan', to: '/business-continuity-plan', isActive: false }}
      x={{ label: 'Privacy Policy', to: '/privacy-policy', isActive: false }}
      y={{ label: '606 Reporting', to: '/reporting', isActive: false }}
    />
    <div className={styles.stdContent}>
      <Content />
    </div>
  </div>
)

export default ClientsRights
