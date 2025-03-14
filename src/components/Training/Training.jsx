import React from 'react'
import styles from './training.module.css'
import UMGLogo from '../../assets/EscudoUMG.png'
import Platzi from '../../assets/platzi.webp'

export const Training = () => {
  return (
    <section id='Training' className={styles.trainingWrapper}>
      <h1 className={styles.titleSection}>Formación</h1>

      <div className={styles.wrapperCards}>

        <div className={styles.trainingCard}>
          <picture>
            <img src={UMGLogo} alt="Escudo Universidad Mariano Gálvez de Guatemala" />
            <div className="">
              <p>Universidad</p>
              <p>Mariano Gálvez</p>
              <p>de Guatemala</p>
            </div>
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>Magister Artíum en Seguridad Informatica</p>
            <p className={styles.time}>2024</p>
          </div>
          <a href="https://umg.edu.gt/ingenieria/sistemas" target='_blank'  className={styles.showMore}>
            Conocer Más
          </a>
        </div>

        <div className={styles.trainingCard}>
          <picture>
            <img src={UMGLogo} alt="Escudo Universidad Mariano Gálvez de Guatemala" />
            <div className="">
              <p>Universidad</p>
              <p>Mariano Gálvez</p>
              <p>de Guatemala</p>
            </div>
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>Ingeniero en Sistemas de Información y Ciencias de la Computación</p>
            <p className={styles.time}>2015-2024</p>
          </div>
          <a href="https://umg.edu.gt/maestria/Seguridad_Informatica" target='_blank'  className={styles.showMore}>
            Conocer Más
          </a>
        </div>

        <div className={styles.trainingCard}>
          <picture>
            <img src={Platzi} alt="Logo de platzi" />
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>Ruta de Desarrollo Web</p>
            <p className={styles.time}>2024</p>
          </div>
          <a href="https://platzi.com/ruta/javascript-full-stack/" target='_blank'  className={styles.showMore}>
            Conocer Más
          </a>
        </div>

      </div>
    </section>
  )
}
