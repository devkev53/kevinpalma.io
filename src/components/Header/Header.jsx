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

const Header = () => {

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
    <header ref={headerRef} className={styles.header_container}>
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
          <a onClick={closeMenu} href="#Home" className={styles.active}>
            <i><MdHomeFilled/></i>
            <span>
              Home
            </span>
          </a>
          <a onClick={closeMenu} href="#About">
            <i><MdInfo/></i>
            <span>
              Sobre mí
            </span>
          </a>
          <a onClick={closeMenu} href="#Skills">
            <i>
              <FaProjectDiagram/>
            </i>
            <span>
              Habilidades
            </span>
          </a>
          <a onClick={closeMenu} href="#Training">
            <i><MdSchool/></i>
            <span>
              Formación
            </span>
          </a>
          <a onClick={closeMenu} href="#Projects">
            <i><MdWork/></i>
            <span>
              Proyectos
            </span>
          </a>
          {/* <a onClick={closeMenu} href="#Contact">
            Contacto
          </a> */}
          {/* <div className={styles.flagsContainer}>
            <div className={styles.flag_item}>
              <img src={spainFlag} alt="spain_flag" />
            </div>
            <div className={styles.flag_item}>
              <img src={ukFlag} alt="unitedKindog_flag" />
            </div>
          </div> */}
        </nav>
      </div>
      <BurgerBtn/>
    </header>
  )
}

export default Header
