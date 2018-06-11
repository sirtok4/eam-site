import React, { Component } from 'react'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import ClientsRightsContent from '../components/ClientsRights/ClientsRightsContent'
import BusinessContinuityPlan from '../components/ClientsRights/BusinessContinuityPlan'
import PrivacyPolicy from '../components/ClientsRights/PrivacyPolicy'
import Reporting from '../components/ClientsRights/Reporting'

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
    this.getSelectedPage = this.getSelectedPage.bind(this)
  }

  handlePageChange (e) {
    console.log('e', e)

    e.preventDefault()

    this.setState({
      currentPage: e.target.value
    })
  }

  getSelectedPage (page) {
    switch(page) {
      case CLIENTS_RIGHTS:
        return <ClientsRightsContent />

      case BUSINESS_CONTINUITY_PLAN:
        return <BusinessContinuityPlan />

      case PRIVACY_PLAN:
        return <PrivacyPolicy />

      case REPORTING:
        return <Reporting />

      default:
        return <ClientsRightsContent />
    }
  }

  render () {
    const { currentPage } = this.state
    const selectedPage = this.getSelectedPage(currentPage)

    return (
      <div className={styles.clientsRightsContainer}>
        <ButtonGroup
          a={{ label: 'Clients Rigths & Protections', isActive: isActivePage(currentPage, CLIENTS_RIGHTS), onClick: this.handlePageChange, value: CLIENTS_RIGHTS }}
          b={{ label: 'Business Continuity Plan', isActive: isActivePage(currentPage, BUSINESS_CONTINUITY_PLAN), onClick: this.handlePageChange, value: BUSINESS_CONTINUITY_PLAN }}
          x={{ label: 'Privacy Policy', isActive: isActivePage(currentPage, PRIVACY_PLAN), onClick: this.handlePageChange, value: PRIVACY_PLAN }}
          y={{ label: '606 Reporting', isActive: isActivePage(currentPage, REPORTING), onClick: this.handlePageChange, value: REPORTING }}
        />
        <div className={styles.stdContent}>
          { selectedPage }
        </div>
      </div>
    )
  }
}

export default ClientsRights
