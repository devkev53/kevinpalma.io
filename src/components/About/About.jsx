import React, { useEffect, useRef } from 'react'
import styles from '../../styles/about.module.css'
import imgAbout from '../../../public/assets/image-about.svg'
// Custom Hooks
import {useNearScreen} from "../../hooks/useNearScreen"
import { useTranslation } from 'react-i18next';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  const about = useRef()
  const {i18n, t}=useTranslation()


  const {isNearScreen, activate} = useNearScreen({
    externalRef: about,
    once:false
  })

  useEffect(() => {
    AOS.init();
  },[])


  useEffect(() => {
    isNearScreen && activate()
  },[isNearScreen])
  return (
    <section
      ref={about}
      id='About'
      className={`${styles.about}`}
    >
      <h1 data-aos="fade-up" className={styles.titleSection}>{t('about')}</h1>

      <div data-aos="fade-right" data-aos-duration="700" className={styles.infoWrapper}>
        <div className={styles.textInfo}>
          <p>Kevin Palma</p>
          <p>{t("aboutMeP1")}</p>
          <p>{t("aboutMeP2")}</p>
          <p>{t("aboutMeP3")}</p>
        </div>
        <picture className={styles.imgAbout}>
          <img src={imgAbout} alt="aboutMeImg" />
        </picture>
      </div>
    </section>
  )
}

export default About
