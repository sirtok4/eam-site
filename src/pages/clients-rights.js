import React from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'

import styles from './clients-rights.module.less'

const ClientsRights = () => (
  <div className={styles.clientsRightsContainer}>
    <ButtonGroup
      a={{ label: 'Clients Rigths & Protections', location: '' }}
      b={{ label: 'Business Continuity Plan', location: '' }}
      x={{ label: 'Privacy Policy', location: '' }}
      y={{ label: '606 Reporting', location: '' }}
    />
  </div>
)

export default ClientsRights
