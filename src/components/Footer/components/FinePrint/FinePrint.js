import React from 'react'

import styles from './fine-print.module.less'

const FinePrint = () => (
  <div className={styles.container}>
    <p>&copy; 2017 Empire Asset Company | 29 Broadway, 12th Floor, New York, NY 10006 | 888-417-7777 | <a href='#'>info@empiream.com</a></p>
    <p>Member FINRA / SIPC | <a href='https://brokercheck.finra.org/' target='_blank'>FINRA's BrokerCheck</a> | <a href='#'>Client's Rights &amp; Protections</a></p>
  </div>
)

FinePrint.displayName = 'FinePrint'
export default FinePrint
