import React from 'react'

import styles from './clients-rights-content.module.less'

const BusinessContinuityPlan = () => (
  <div className={styles.clientRightsContainer}>
    <div className={styles.section}>
      <p>
        Securities industry regulations require that brokerage firms provide
        clients with their plans for contingency in the event of a business
        disruption due to natural or other forces. Empire Asset Management
        Company and Empire Financial Management Company ("Empire") maintains an
        extensive Business Continuity Plan on file which considers several
        circumstances of varying magnitude. The following sets forth the basic
        considerations for a few possible situations:
      </p>
    </div>
    <div className={styles.section}>
      <ul>
        <li>
          If our primary physical location and the local network became
          unavailable, due to any circumstances such as a power outage, internet
          disruption or lack of physical access to our offices, we would restore
          our electronic network to operate through the network backup which is
          stored off-site.
        </li>
        <li>
          In the event that our telephone network was unavailable for an
          extended period of time but we continued to have use of the internet,
          the firm would post alternate telephone numbers to its website.
        </li>
        <li>
          During a significant business disruption, if our clients are unable to
          reach us either by telephone or internet and require access to their
          accounts, they are advised to contact our clearing firm RBC
          Correspondent Services a division of RBC Capital Markets, LLC, for
          access to their funds and securities. Clients are advised to refer to
          their Account Statements for contact information.
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <p>
        Empire regularly assesses and tests its plan to verify that in the
        unlikely event it experiences a business disruptions, the firm has taken
        reasonable steps to address risk, service interruption and limited
        account access.
      </p>
    </div>
  </div>
)

export default BusinessContinuityPlan

