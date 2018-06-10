import React, { Component } from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'

import styles from './clients-rights.module.less'

// Page values
const CLIENTS_RIGHTS = 'clientsRights'
const BUSINESS_CONTINUITY_PLAN = 'businessContinuityPlan'
const PRIVACY_PLAN = 'privacyPlan'
const REPORTING = '606reporting'

const isActivePage = (currentPage, page) => {
  return currentPage === page
}

class ClientsRights extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 'clientsRights'
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange ({ target }) {
    this.setState({
      currentPage: target.value
    })
  }

  render () {
    const { currentPage } = this.state
    return (
      <div className={styles.clientsRightsContainer}>
        <ButtonGroup
          a={{ label: 'Clients Rigths & Protections', isActive: isActivePage(currentPage, CLIENTS_RIGHTS), onClick: this.handlePageChange, value: CLIENTS_RIGHTS }}
          b={{ label: 'Business Continuity Plan', isActive: isActivePage(currentPage, BUSINESS_CONTINUITY_PLAN), onClick: this.handlePageChange, value: BUSINESS_CONTINUITY_PLAN }}
          x={{ label: 'Privacy Policy', isActive: isActivePage(currentPage, PRIVACY_PLAN), onClick: this.handlePageChange, value: PRIVACY_PLAN }}
          y={{ label: '606 Reporting', isActive: isActivePage(currentPage, REPORTING), onClick: this.handlePageChange, value: REPORTING }}
        />
      </div>
    )
  }
}

export default ClientsRights
