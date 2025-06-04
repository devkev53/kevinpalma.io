import React, {useRef} from 'react'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Styles
import styles from '../../styles/home.module.css'
import { Link } from 'react-router-dom'
// Images
import imgHome from '../../../public/assets/image-home.svg'
import SocialLinks from '../SocialLinks/SocialLinks'
import { useEffect } from 'react';
// Icons
import { MdSimCardDownload } from "react-icons/md";
// Custom Hooks
import {useNearScreen} from "../../hooks/useNearScreen"
import { useTranslation } from 'react-i18next';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Home = () => {

  const home = useRef()
  const {i18n, t}=useTranslation()

  const {isNearScreen, activate} = useNearScreen({
    externalRef: home,
    once:false
  })

  useEffect(() => {
    AOS.init();
  },[])


  useEffect(() => {
    isNearScreen && activate()
  },[isNearScreen])

  return (
    <section id='Home' ref={home} className={styles.homeContainer}>
      <picture className={styles.containerImg}>
        <img data-aos="zoom-in" data-aos-duration="900" src={imgHome} alt="Ilustracion Kevin Palma" />
      </picture>

      <div data-aos="fade-down-right" data-aos-duration="900" className={styles.home_info}>
        <p className={styles.home_text1}>{t('homeGreeting')}</p>
        <p className={styles.home_text2}>Kevin Palma</p>

        <div>
          {/* <p className={`${styles.home_text3} ${styles.textType}`}>Magister Artium en Seguridad Informática</p> */}
        </div>

        <div className={styles.home_text4}>
          <p>{t("homeDescription")}</p>
        </div>

        <div className={styles.containerBtn}>
          <a href='https://drive.google.com/file/d/1XtNmX6aFttLOf03wyfwwgzJfcBN1fPZN/view?usp=sharing' target='_blank' className={styles.homeBtn}>
            <button className='btn primaryBtn'>
              <i><MdSimCardDownload/></i>
              <span>{t('downloadCv')}</span>
            </button>
          </a>

          {/* <a href="" className={styles.homeBtn}>
            <button className='btn secundaryBtn'>Contacto</button>
          </a> */}
        </div>

      </div>

      <div data-aos="fade-right" data-aos-duration="900" className={styles.links}>
        <SocialLinks/>
      </div>


    </section>
  )
}

export default Home
