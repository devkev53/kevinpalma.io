import React from 'react'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Styles
import styles from './home.module.css'
import { Link } from 'react-router-dom'
// Images
import imageTest from '../../assets/image-home-test.png'
import SocialLinks from '../SocialLinks/SocialLinks'
import { useEffect } from 'react';
const Home = () => {

  useEffect(() => {
    AOS.init();
    console.log(AOS.init())
  },[])

  return (
    <section id='Home' className={styles.homeContainer} data-aos="fade-left">
      <picture className={styles.containerImg}>
        <img src={imageTest} alt="Ilustracion Kevin Palma" />
      </picture>

      <div className={styles.home_info}>
        <p className={styles.home_text1}>Hola! Soy</p>
        <p className={styles.home_text2}>Kevin Palma</p>

        <div>
          <p className={`${styles.home_text3} ${styles.textType}`}>Magister Artium en Seguridad Informática</p>
        </div>

        <div className={styles.parrafo_info}>
          <p>Estudiante de Estadistica y programación enfocada al Desarrollo Web Frontend. Como persona amante a los diseños intuitivos y estéticamente agradables busco crear proyectos que brinden la mejor experiencia para el usuario.</p>
        </div>

        <div className={styles.containerBtn}>
          <a href="" className={styles.homeBtn}>
            <button className='btn primaryBtn'>Descargar CV</button>
          </a>

          <a href="" className={styles.homeBtn}>
            <button className='btn secundaryBtn'>Contacto</button>
          </a>
        </div>

      </div>

      <div className={styles.links}>
        <SocialLinks/>
      </div>


    </section>
  )
}

export default Home
