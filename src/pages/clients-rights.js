import React, { Component } from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'

import styles from './clients-rights.module.less'

// Page values
const CLIENTS_RIGHTS = 'clientsRights'
const BUSINESS_CONTINUITY_PLAN = 'businessContinuityPlan'
const PRIVACY_PLAN = 'privacyPlan'
const REPORTING = '606reporting'

class ClientsRights extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 'clientsRights'
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange (e) {
    console.log('e', e.target.value)
  }

  render () {
    return (
      <div className={styles.clientsRightsContainer}>
        <ButtonGroup
          a={{ label: 'Clients Rigths & Protections', onClick: this.handlePageChange, value: CLIENTS_RIGHTS }}
          b={{ label: 'Business Continuity Plan', onClick: this.handlePageChange, value: BUSINESS_CONTINUITY_PLAN }}
          x={{ label: 'Privacy Policy', onClick: this.handlePageChange, value: PRIVACY_PLAN }}
          y={{ label: '606 Reporting', onClick: this.handlePageChange, value: REPORTING }}
        />
      </div>
    )
  }
}

export default ClientsRights
