import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import reactImg from '../../../public/assets/react.svg'
import styles from '../../styles/footer.module.css'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const {t} = useTranslation()
  return (
    <div>
      <div className={styles.footerLinks}>
        <SocialLinks/>
      </div>
      <div className={styles.footerInfo}>
        <p>{t('footer1')} <img src={reactImg} alt="" /> {t('footer2')} ❤️ {t('footer3')} <span>Kevin Palma</span></p>
      </div>
    </div>
  )
}
