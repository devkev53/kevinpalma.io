import React, { useEffect, useRef } from 'react'
import styles from '../../styles/skills.module.css'
import htmlIcon from '../../../public/assets/html5.svg'
import css3Icon from '../../../public/assets/css3.svg'
import jsIcon from '../../../public/assets/javascript.svg'
import tsIcon from '../../../public/assets/type.svg'
import reactIcon from '../../../public/assets/react.svg'
import pythonIcon from '../../../public/assets/python.svg'
import djangoIcon from '../../../public/assets/django.svg'
import gitIcon from '../../../public/assets/git.svg'
import githubIcon from '../../../public/assets/github.svg'
import dockerIcon from '../../../public/assets/docker.svg'
import postgresSqlIcon from '../../../public/assets/postgresql.svg'
import { SkillCard } from '../SkillCard'
import {useNearScreen} from "../../hooks/useNearScreen"
import { useTranslation } from 'react-i18next';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Skills = () => {

  const skills = useRef()
  const {i18n, t}=useTranslation()


  const {isNearScreen, activate} = useNearScreen({
    externalRef: skills,
    once:false
  })

  useEffect(() => {
    AOS.init();
  },[])

  useEffect(() => {
    isNearScreen && activate()
  },[isNearScreen])

  return (
    <section
      id='Skills'
      ref={skills}
      className={styles.skillsSection}
    >
      <h1 data-aos="fade-up" className={styles.titleSection}>{t('skills')}</h1>
      <div className={styles.cardsContainers}>

        {/* HTML-5 */}
        <SkillCard
          name="HTML 5"
          iconPath={htmlIcon}
          skillStyle={styles.html}
          effect="fade-up"
          duration="300"
        />

        {/* CSS-3 */}
        <SkillCard
          name="CSS 3"
          iconPath={css3Icon}
          skillStyle={styles.css}
          effect="fade-up"
          duration="500"
        />

        {/* JavaScript */}
        <SkillCard
          name="JavaScript"
          iconPath={jsIcon}
          skillStyle={`${styles.skillCard} ${styles.js}`}
          effect="fade-up"
          duration="700"
        />

        {/* TypeScript */}
        <SkillCard
          name="TypeScript"
          iconPath={tsIcon}
          skillStyle={`${styles.skillCard} ${styles.ts}`}
          effect="fade-up"
          duration="900"
        />

        {/* React */}
        <SkillCard
          name="ReactJs"
          iconPath={reactIcon}
          skillStyle={`${styles.skillCard} ${styles.react}`}
          effect="fade-up"
          duration="300"
        />

        {/* Python */}
        <SkillCard
          name="Python"
          iconPath={pythonIcon}
          skillStyle={`${styles.skillCard} ${styles.python}`}
          effect="fade-up"
          duration="500"
        />

        {/* Django */}
        <SkillCard
          name="Django"
          iconPath={djangoIcon}
          skillStyle={`${styles.skillCard} ${styles.django}`}
          effect="fade-up"
          duration="700"
        />

        {/* Git */}
        <SkillCard
          name="Git"
          iconPath={gitIcon}
          skillStyle={`${styles.skillCard} ${styles.git}`}
          effect="fade-up"
          duration="900"
        />

        {/* Github */}
        <SkillCard
          name="GitHub"
          iconPath={githubIcon}
          skillStyle={`${styles.skillCard} ${styles.github}`}
          effect="fade-up"
          duration="300"
        />

        {/* docker */}
        <SkillCard
          name="Docker"
          iconPath={dockerIcon}
          skillStyle={`${styles.skillCard} ${styles.docker}`}
          effect="fade-up"
          duration="500"
        />

        {/* Git */}
        <SkillCard
          name="PosgreSql"
          iconPath={postgresSqlIcon}
          skillStyle={`${styles.skillCard} ${styles.postgresql}`}
          effect="fade-up"
          duration="700"
        />
 
      </div>
    </section>
  )
}
