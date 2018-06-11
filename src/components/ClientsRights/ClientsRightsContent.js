import React from 'react'

import styles from './clients-rights-content.module.less'

const ClientsRightsContent = () => (
  <div className={styles.clientsRightsContainer}>
    <div className={styles.section}>
      <h4>Regulartory Controls for your Protection</h4>
      <p>
        Empire Asset Management and RBC Correspondent Services a division of RBC
        Capital Markets, LLC are registered broker-dealers are subject to the rules
        and regulations of the Securities and Exchange Commission (SEC), the
        Financial Industry Regulatory Authority (FINRA) and is registered with the
        Municipal Securities Rulemaking Board (MSRB). These regulatory organizations
        each have certain rules and regulations that we must follow to safeguard
        your assets, including:
      </p>
    </div>
    <div className={styles.section}>
      <ul>
        <li>
          <p>Keeping accurate records of your assets</p>
        </li>
        <li>
          <p>Maintaining net capital at required levels</p>
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <p>
        In compliance with SEC rules,
        RBC Correspondent Services a division of RBC Capital Markets, LLC will have
        an independent public accounting firm audit your financial information every
        year. Further, as a member of the NYSE and FINRA and registered with the
        SEC, RBC Correspondent Services a division of RBC Capital Markets, LLC is
        subject to continuous oversight and examinations.
      </p>
    </div>
    <div className={styles.section}>
      <h4>Further Safeguards</h4>
      <p>
        As your custodian, it is required by the SEC to file monthly and quarterly financial and operational reports (FOCUS reports) within 17 business days of the month&#39;s end. The quarterly report contains financial statements, including:
      </p>
    </div>
    <div className={styles.className}>
      <ul>
        <li>
          <p>Statement of financial condition</p>
        </li>
        <li>
          <p>Income statement and statement of changes in stockholders&#39; equity</p>
        </li>
        <li>
          <p>Regulatory schedules, including a computation of net capital, a reserve formula computation, and other key financial and operational data</p>
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <p>
        Empire Asset Management cannot use your fully paid securities for its business. These securities must be held for your own exclusive benefit, and are subject to the instructions that we provide to RBC Correspondent Services a division of RBC Capital Markets, LLC.
      </p>
    </div>
    <div className={styles.section}>
      <p>
        RBC Correspondent Services a division of RBC Capital Markets, LLC must account for and inspect every physical security owned by an investor at least once every calendar quarter. Any differences must be recorded and corrected within specific time frames. Net customer cash balances not required for customer transactions must be maintained in a cash account segregated for the exclusive benefit of customers.*
      </p>
    </div>
    <div className={styles.section}>
      <h4>Securities Investor Protection Corporation (SIPC)</h4>
      <p>
        Both Empire Asset Management and RBC Capital Markets, LLC are members of the Securities Investor Protection Corporation (SIPC), which was created in 1970 to protect customers of member broker-dealer firms in case of broker-dealer liquidation. A non-profit membership corporation, SIPC is funded by broker-dealers, and protects its membership by law. To cover assets such as yours, the SIPC fund is supported by:
      </p>
    </div>
    <div className={styles.section}>
      <ul>
        <li>$1 billion line of credit with a bank consortium</li>
        <li>Borrowing power of up to $1 billion from the U.S. Treasury through the SEC</li>
      </ul>
    </div>
    <div className={styles.section}>
      <p>
        Because the Securities Investor Protection Act of 1970 affords special benefits to SIPC covered firms, securities in accounts carried by RBC Correspondent Services a division of RBC Capital Markets, LLC are protected in accordance with the Securities Investor Protection Corporation (SIPC) up to $500,000 (including cash claims limited to $250,000).  For details, please visit www.sipc.org.
      </p>
    </div>
    <div className={styles.fineprint}>
      * The inclusion of information in connection with the regulatory oversight under which Empire Asset Management and RBC Correspondent Services a division of RBC Capital Markets, LLC operate are not intended to imply or represent an endorsement, indemnification or guarantee by any regulatory authority, of the firms&#39; practices, products or services.
    </div>
  </div>
)

export default ClientsRightsContent
