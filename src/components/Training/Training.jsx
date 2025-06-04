import React, {useEffect} from 'react'
import styles from '../../styles/training.module.css'
import UMGLogo from '../../../public/assets/EscudoUMG.png'
import Platzi from '../../../public/assets/platzi.webp'
import IntecapLogo from '../../../public/assets/intecap.png'
import {useNearScreen} from "../../hooks/useNearScreen"

import { useTranslation } from 'react-i18next';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from 'react'

export const Training = () => {

  const training = useRef()
  const {i18n, t}=useTranslation()


  const {isNearScreen, activate} = useNearScreen({
    externalRef: training,
    once:false
  })

  useEffect(() => {
    AOS.init();
  },[])

  useEffect(() => {
    isNearScreen && activate()
  },[isNearScreen])


  return (
    <section id='Training' ref={training} className={styles.trainingWrapper}>
      <h1 data-aos="fade-up" className={styles.titleSection}>Formación</h1>

      <div className={styles.wrapperCards}>

        <a href="https://intecap.edu.gt/certificacionestics/" target='_blank' data-aos="fade-up" data-aos-duration="500" className={styles.trainingCard}>
          <picture>
            <img src={IntecapLogo} alt="Logo de INTECAP" />
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>{t('excel')}</p>
            <p className={styles.time}>2025</p>
          </div>
          <p className={styles.showMore}>
            {t('formationLearMore')}
          </p>
        </a>

        <a href="https://cursos.intecap.edu.gt/CursosDetalle.aspx?ide=4162&IDUO=104502&p=0" target='_blank' data-aos="fade-down" data-aos-duration="500" className={styles.trainingCard}>
          <picture>
            <img src={IntecapLogo} alt="Logo de INTECAP" />
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>{t('powerBi')}</p>
            <p className={styles.time}>2024</p>
          </div>
          <p className={styles.showMore}>
            {t('formationLearMore')}
          </p>
        </a>

        <a href="https://umg.edu.gt/ingenieria/sistemas" target='_blank' data-aos="fade-up" data-aos-duration="500" className={styles.trainingCard}>
          <picture>
            <img src={UMGLogo} alt="Escudo Universidad Mariano Gálvez de Guatemala" />
            <div className="">
              <p>Universidad</p>
              <p>Mariano Gálvez</p>
              <p>de Guatemala</p>
            </div>
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>{t('ma')}</p>
            <p className={styles.time}>2024</p>
          </div>
          <p className={styles.showMore}>
            {t('formationLearMore')}
          </p>
        </a>

        <a href="https://umg.edu.gt/maestria/Seguridad_Informatica" target='_blank' data-aos="fade-up" data-aos-duration="500" className={styles.trainingCard}>
          <picture>
            <img src={UMGLogo} alt="Escudo Universidad Mariano Gálvez de Guatemala" />
            <div className="">
              <p>Universidad</p>
              <p>Mariano Gálvez</p>
              <p>de Guatemala</p>
            </div>
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>{t('ing')}</p>
            <p className={styles.time}>2015-2024</p>
          </div>
          <p className={styles.showMore}>
            {t('formationLearMore')}
          </p>
        </a>

        <a href="https://platzi.com/ruta/javascript-full-stack/" target='_blank' data-aos="fade-down" data-aos-duration="500" className={styles.trainingCard}>
          <picture>
            <img src={Platzi} alt="Logo de platzi" />
          </picture>
          <div className={styles.trainingCardGradeWrapper}>
            <p className={styles.grade}>{t('platzi')}</p>
            <p className={styles.time}>2024</p>
          </div>
          <p className={styles.showMore}>
            {t('formationLearMore')}
          </p>
        </a>

      </div>
    </section>
  )
}
