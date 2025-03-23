import React, { useEffect, useRef, useState } from 'react'

// Styles
import styles from '../../styles/header.module.css'
// Components
import BurgerBtn from '../BurgerBtn/BurgerBtn'
import Logo from '../Logo/Logo'

// Images
import spainFlag from '../../../public/assets/spain.png'
import ukFlag from '../../../public/assets/uk.png'

// Store
import {useHeader} from '../../store/headerStore'
import { useHeaderHook } from '../../hooks/useHeader'
// Icons
import { FaProjectDiagram } from "react-icons/fa";
import { MdHomeFilled, MdInfo, MdWork, MdSchool } from "react-icons/md";

import '../../utils/i18n'
import { useTranslation } from 'react-i18next'
import { useLangHook } from '../../hooks/useLang'


const Header = () => {

  const {i18n, t} = useTranslation()
  const spanishBtn = useRef()
  const englishBtn = useRef()
  const {changeToEnglish, changeToSpanish} = useLangHook([spanishBtn.current, englishBtn.current])

  const {isActive, closeMenu} = useHeaderHook()

  const headerRef = useRef()

  const changeHeader = () => {
    window.addEventListener('scroll', () => {
      headerRef.current.classList.toggle(`${styles.down}`, scrollY>0)
    })
  }

  useEffect(() => {
    changeHeader()
  },[])

  return (
    <header id='headerNav' ref={headerRef} className={styles.header_container}>
      <div className={styles.logoContainer}>
        <Logo/>
      </div>

      <div className={`
            ${ styles.navWrapper}
            ${isActive && styles.navWrapperActive}
      `}>
        <nav className={`
            ${ styles.nav}
          `}>
          <a onClick={closeMenu} href="#Home">
            <i><MdHomeFilled/></i>
            <span>
              {t('home')}
            </span>
          </a>
          <a onClick={closeMenu} href="#About">
            <i><MdInfo/></i>
            <span>
              {t('about')}
            </span>
          </a>
          <a onClick={closeMenu} href="#Skills">
            <i>
              <FaProjectDiagram/>
            </i>
            <span>
              {t('skills')}
            </span>
          </a>
          <a onClick={closeMenu} href="#Training">
            <i><MdSchool/></i>
            <span>
              {t('training')}
            </span>
          </a>
          <a onClick={closeMenu} href="#Projects">
            <i><MdWork/></i>
            <span>
              {t('projects')}
            </span>
          </a>
          {/* <a onClick={closeMenu} href="#Contact">
            Contacto
          </a> */}
          <div className={styles.flagsContainer}>
            <div className={styles.flag_item}>
              <button
                ref={spanishBtn}
                className={`btnLang`}
                onClick={changeToSpanish}>
                <img src={spainFlag} alt="spain_flag" />
              </button>
            </div>
            <div className={styles.flag_item}>
              <button
                ref={englishBtn}
                className={`btnLang ${styles.disabled}`}
                onClick={changeToEnglish}
              >
                <img src={ukFlag} alt="unitedKindog_flag" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <BurgerBtn/>
    </header>
  )
}

export default Header
