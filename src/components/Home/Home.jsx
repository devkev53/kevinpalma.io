import React from 'react'
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

const Home = () => {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <section id='Home' className={styles.homeContainer}>
      <picture className={styles.containerImg}>
        <img data-aos="zoom-in" src={imgHome} alt="Ilustracion Kevin Palma" />
      </picture>

      <div className={styles.home_info}>
        <p className={styles.home_text1}>Hola! Soy</p>
        <p className={styles.home_text2}>Kevin Palma</p>

        <div>
          {/* <p className={`${styles.home_text3} ${styles.textType}`}>Magister Artium en Seguridad Informática</p> */}
        </div>

        <div className={styles.home_text4}>
          <p>Me considero una persona proactiva apasionada por la tecnologia lo cual me ha llevado a realizar aprendizaje continuo, logrando obtener habilidades para la creacion de soluciones a problemas por medio de la tecnologia, asi mismo me considero de mentalidad abierata y adaptable, listo para asumir nuevos retos y poder expandir las habilidades.</p>
        </div>

        <div className={styles.containerBtn}>
          <a href="" className={styles.homeBtn}>
            <button className='btn primaryBtn'>
              <i><MdSimCardDownload/></i>
              <span>Descargar CV</span>
            </button>
          </a>

          {/* <a href="" className={styles.homeBtn}>
            <button className='btn secundaryBtn'>Contacto</button>
          </a> */}
        </div>

      </div>

      <div className={styles.links}>
        <SocialLinks/>
      </div>


    </section>
  )
}

export default Home
