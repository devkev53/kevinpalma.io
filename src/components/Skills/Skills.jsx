import React, { useEffect } from 'react'
import styles from './skills.module.css'
import htmlIcon from '../../assets/html5.svg'
import css3Icon from '../../assets/css3.svg'
import jsIcon from '../../assets/javascript.svg'
import tsIcon from '../../assets/type.svg'
import reactIcon from '../../assets/react.svg'
import pythonIcon from '../../assets/python.svg'
import djangoIcon from '../../assets/django.svg'
import gitIcon from '../../assets/git.svg'
import githubIcon from '../../assets/github.svg'
import dockerIcon from '../../assets/docker.svg'
import postgresSqlIcon from '../../assets/postgresql.svg'
import { SkillCard } from '../SkillCard'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Skills = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <section
      id='Skills'
      className={styles.skillsSection}
    >
      <h1 data-aos="fade-up" className={styles.titleSection}>Habilidades</h1>
      <div className={styles.cardsContainers}>

        {/* HTML-5 */}
        <SkillCard
          name="HTML 5"
          link="https://developer.mozilla.org/es/docs/Glossary/HTML5"
          iconPath={htmlIcon}
          skillStyle={styles.html}
          effect="fade-up"
          duration="300"
        />

        {/* CSS-3 */}
        <SkillCard
          name="CSS 3"
          link=""
          iconPath={css3Icon}
          skillStyle={styles.css}
          effect="fade-up"
          duration="500"
        />

        {/* JavaScript */}
        <SkillCard
          name="JavaScript"
          link=""
          iconPath={jsIcon}
          skillStyle={`${styles.skillCard} ${styles.js}`}
          effect="fade-up"
          duration="700"
        />

        {/* TypeScript */}
        <SkillCard
          name="TypeScript"
          link=""
          iconPath={tsIcon}
          skillStyle={`${styles.skillCard} ${styles.ts}`}
          effect="fade-up"
          duration="900"
        />

        {/* React */}
        <SkillCard
          name="ReactJs"
          link=""
          iconPath={reactIcon}
          skillStyle={`${styles.skillCard} ${styles.react}`}
          effect="fade-up"
          duration="300"
        />

        {/* Python */}
        <SkillCard
          name="Python"
          link=""
          iconPath={pythonIcon}
          skillStyle={`${styles.skillCard} ${styles.python}`}
          effect="fade-up"
          duration="500"
        />

        {/* Django */}
        <SkillCard
          name="Django"
          link=""
          iconPath={djangoIcon}
          skillStyle={`${styles.skillCard} ${styles.django}`}
          effect="fade-up"
          duration="700"
        />

        {/* Git */}
        <SkillCard
          name="Git"
          link=""
          iconPath={gitIcon}
          skillStyle={`${styles.skillCard} ${styles.git}`}
          effect="fade-up"
          duration="900"
        />

        {/* Github */}
        <SkillCard
          name="Github"
          link=""
          iconPath={githubIcon}
          skillStyle={`${styles.skillCard} ${styles.github}`}
          effect="fade-up"
          duration="300"
        />

        {/* docker */}
        <SkillCard
          name="Docker"
          link=""
          iconPath={dockerIcon}
          skillStyle={`${styles.skillCard} ${styles.docker}`}
          effect="fade-up"
          duration="500"
        />

        {/* Git */}
        <SkillCard
          name="PosgreSql"
          link=""
          iconPath={postgresSqlIcon}
          skillStyle={`${styles.skillCard} ${styles.postgresql}`}
          effect="fade-up"
          duration="700"
        />
 
      </div>
    </section>
  )
}
