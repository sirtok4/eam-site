import React, { Component } from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import Content from '../components/ClientsRights/ClientsRightsContent'

import styles from './clients-rights.module.less'

const ClientsRights = () => (
  <div className={styles.clientsRightsContainer}>
    <ButtonGroup
      a={{ label: 'Clients Rigths & Protections', isActive: true }}
      b={{ label: 'Business Continuity Plan', isActive: false }}
      x={{ label: 'Privacy Policy', isActive: false }}
      y={{ label: '606 Reporting', isActive: false }}
    />
    <div className={styles.stdContent}>
      <Content />
    </div>
  </div>
)

export default ClientsRights
