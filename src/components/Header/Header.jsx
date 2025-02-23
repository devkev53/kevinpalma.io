import React from 'react'

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

const Header = () => {

  const {isActive, setIsActive} = useHeader(state=>state)


  return (
    <header className={styles.header_container}>
      <div className={styles.logoContainer}>
        <Logo/>
      </div>

       <nav className={`
          ${ styles.nav}
          ${isActive && styles.navActive}
        `}>
        <a href="#Home" className={styles.active}>
          Home
        </a>
        <a href="">
          Sobre mí
        </a>
        <a href="">
          Habilidades
        </a>
        <a href="">
          Formación
        </a>
        <a href="">
          Proyectos
        </a>
        <a href="">
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
      <BurgerBtn/>
    </header>
  )
}

export default Header
