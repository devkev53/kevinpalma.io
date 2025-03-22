import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import reactImg from '../../../public/assets/react.svg'
import styles from '../../styles/footer.module.css'

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerLinks}>
        <SocialLinks/>
      </div>
      <div className={styles.footerInfo}>
        <p>Buildin in <img src={reactImg} alt="" /> with ❤️ by <span>Kevin Palma</span></p>
      </div>
    </div>
  )
}
