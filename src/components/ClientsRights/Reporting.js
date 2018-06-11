import React from 'react'

import styles from './clients-rights-content.module.less'

const Reporting = () => (
  <div className={styles.clientsRightsContainer}>
    <div className={styles.section}>
      <h4 className={styles.boldheader}>
        SEC Rule 606 Report: Percentages of Total Non-Directed Orders Routed to
        Venues
      </h4>
    </div>

    <div className={styles.section}>
      <p>
        Empire Asset Management has prepared this report pursuant to U.S.
        Securities and Exchange Commission Rule 606, formerly Rule 11A(c)1-6,
        requiring all brokerage firms to make publicly available quarterly
        reports on their order routing practices. The report provides
        information on the routing of non-directed orders, which are any orders
        that the customer has not specifically instructed to be routed to a
        particular venue for execution.
      </p>
    </div>

    <div className={styles.section}>
      <a
        href="https://private.tagaudit.com/do/display?page=Rule606::Report::PublicClient&amp;subpage=Rule606::Report::guts&amp;heading=Development&amp;cat1=XH&amp;cat2=XH2&amp;topic=Rule606&amp;stitle=Rule+606&amp;mypage=nyse&amp;tctrl(usr)=eamc"
        target="_blank"
      >
        <p>View 606 Report</p>
      </a>
    </div>
  </div>
)

export default Reporting
