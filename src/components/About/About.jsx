import React, { useEffect } from 'react'
import styles from './about.module.css'
import {useNearScreen} from '../../hooks/useNearScreen'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const {isNearScreen, ref} = useNearScreen({distance:'-300px'})

  useEffect(() => {
    AOS.init();
    console.log(AOS.init())
  },[])

  return (
    <section
      id='About'
      ref={ref}
      className={`${styles.about} ${isNearScreen && styles.animate}`}
    >
      <h1 data-aos="fade-up" className={styles.titleSection}>Sobre mí</h1>

      <div data-aos="fade-right" data-aos-duration="700" className={styles.infoWrapper}>
        <div className={styles.textInfo}>
          <p>Kevin Palma</p>
          <p>Cuento con un grado academico de Magister Artium en Seguridad Informatica, asi como una Ingenieria en Sistemas de Informacion y Ciencias de la Computación, sin embargo desde que realizaba mi preparacion en la carrera me ha apasionado la programacion, y no he parado e aprender y conocer nuevas tecnologias.</p>
          <p>Actualmente me desempeño en el area de soporte tecnico brindando soporte a personal en la institucion en la que laboro, sin embargo paralelo a esto desarrollo proyectos personales de programación, asi mismo he desarrollado proyectos pequeños para terceras personas, en los cuales he aplicado los conocimientos que he logrado adquirir a lo largo de mi formacion.</p>
          <p>En lo personal considero que una persona exitosa no solo debe contener habilidades tecnicas, si no que estas se deben acompañar de habilidades blandas, en lo personal creo que cuento con comunicacion clara, trabajo en equipo, adaptacion al cambio y resolucion de problemas.</p>
        </div>
        <picture className={styles.imgAbout}>
          <img src="https://github.com/mariasmoUN/portafolio/blob/main/assets/images/image-sobreMi.png?raw=true" alt="aboutMeImg" />
        </picture>
      </div>
    </section>
  )
}

export default About
