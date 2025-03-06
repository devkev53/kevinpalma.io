import React from 'react'
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


export const Skills = () => {
  return (
    <section id='skills' className={styles.skillsSecction}>
      <h1 className={styles.titleSecction}>Sobre mí</h1>
      <div className={styles.cardsContainers}>
        
        {/* HTML-5 */}
        <SkillCard
          name="HTML 5"
          link="https://developer.mozilla.org/es/docs/Glossary/HTML5"
          iconPath={htmlIcon}
          skillStyle={styles.html}
        />

        {/* CSS-3 */}
        <SkillCard
          name="CSS 3"
          link=""
          iconPath={css3Icon}
          skillStyle={styles.css}
        />

        {/* JavaScript */}
        <div className={`${styles.skillCard} ${styles.js}`}>
          <picture>
            <img src={jsIcon} alt="Javascript Icon" />
          </picture>
          <p>JavaScript</p>
        </div>

        {/* TypeScript */}
        <div className={`${styles.skillCard} ${styles.ts}`}>
          <picture>
            <img src={tsIcon} alt="TypeScript Icon" />
          </picture>
          <p>TypeScript</p>
        </div>

        {/* React */}
        <div className={`${styles.skillCard} ${styles.react}`}>
          <picture>
            <img src={reactIcon} alt="React Icon" />
          </picture>
          <p>React</p>
        </div>

        {/* Python */}
        <div className={`${styles.skillCard} ${styles.python}`}>
          <picture>
            <img src={pythonIcon} alt="Python Icon" />
          </picture>
          <p>Python</p>
        </div>

        {/* Django */}
        <div className={`${styles.skillCard} ${styles.django}`}>
          <picture>
            <img src={djangoIcon} alt="Django Icon" />
          </picture>
          <p>Django</p>
        </div>

        {/* Git */}
        <div className={`${styles.skillCard} ${styles.git}`}>
          <picture>
            <img src={gitIcon} alt="Git Icon" />
          </picture>
          <p>Git</p>
        </div> 
        
        {/* Github */}
        <div className={`${styles.skillCard} ${styles.github}`}>
          <picture>
            <img src={githubIcon} alt="Github Icon" />
          </picture>
          <p>Github</p>
        </div> 

        {/* docker */}
        <div className={`${styles.skillCard} ${styles.docker}`}>
          <picture>
            <img src={dockerIcon} alt="Docker Icon" />
          </picture>
          <p>Docker</p>
        </div>

        {/* Git */}
        <div className={`${styles.skillCard} ${styles.postgresql}`}>
          <picture>
            <img src={postgresSqlIcon} alt="PostgreSql Icon" />
          </picture>
          <p>PosgreSql</p>
        </div>
 
      </div>
    </section>
  )
}
