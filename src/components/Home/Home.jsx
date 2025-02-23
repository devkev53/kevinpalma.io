import React from 'react'
// Styles
import styles from './home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <picture className={styles.containerImg}>
        <img src="https://avatars.githubusercontent.com/u/47469351?v=4" alt="Ilustracion Kevin Palma" />
      </picture>

      <div className="home_info">
        <p className='home_text-1'>Hola! Soy</p>
        <p className={styles.home_text2}>Kevin Palma</p>
      </div>

      <div>
        <p className="home_text-3">Magister Artium en Seguridad Informática</p>
      </div>

      <div className={styles.containerBtnCV}>
        <a href="">
          <button>Descargar CV</button>
        </a>
      </div>

      <div className="container_button">
          <button className='cv_button'></button>
      </div>

    </section>
  )
}

export default Home
