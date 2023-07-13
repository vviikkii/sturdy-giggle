import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>	&#9400;2023 Travel. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Travel-Around Facebook"/>  
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Travel-Around Instagram"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Travel-Around Twitter"/>  
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Travel-Around Youtube"/>    
      </div>
    </div>
  )
}

export default Footer
