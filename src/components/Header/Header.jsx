import React, { useEffect, useRef, useState } from 'react'

// Styles
import styles from './header.module.css'
// Components
import BurgerBtn from '../BurgerBtn/BurgerBtn'
import Logo from '../Logo/Logo'

// Images
import spainFlag from '../../assets/spain.png'
import ukFlag from '../../assets/uk.png'

// Store
import {useHeader} from '../../store/headerStore'
import { useHeaderHook } from '../../hooks/useHeader'

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
            Home
          </a>
          <a onClick={closeMenu} href="#About">
            Sobre mí
          </a>
          <a onClick={closeMenu} href="">
            Habilidades
          </a>
          <a onClick={closeMenu} href="">
            Formación
          </a>
          <a onClick={closeMenu} href="">
            Proyectos
          </a>
          <a onClick={closeMenu} href="">
            Contacto
          </a>
          <div className={styles.flagsContainer}>
            <div className={styles.flag_item}>
              <img src={spainFlag} alt="spain_flag" />
            </div>
            <div className={styles.flag_item}>
              <img src={ukFlag} alt="unitedKindog_flag" />
            </div>
          </div>
        </nav>
      </div>
      
      <BurgerBtn/>
    </header>
  )
}

export default Header
