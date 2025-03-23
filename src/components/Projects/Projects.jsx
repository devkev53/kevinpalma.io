import React, {useRef, useEffect} from 'react'
import styles from '../../styles/projects.module.css'
import farmApp from '../../../public/assets/farmApp.png'
import example from '../../../public/assets/farmApp.png'
import { FaChrome, FaGithubAlt, FaRegImages } from "react-icons/fa";
import { CardsProjects } from '../CardsProjects/CardsProjects';
import { PROJECTS } from '../../utils/projectsList';
import {useNearScreen} from "../../hooks/useNearScreen"


export const Projects = () => {

  const projects = useRef()

  const {isNearScreen, activate} = useNearScreen({
    externalRef: projects,
    once:false,
    threshold: 0.1
  })

  useEffect(() => {
    isNearScreen && activate()
  },[isNearScreen])

  return (
    <section id='Projects' ref={projects} className={styles.projectsWrapper}>
      <h1 className={styles.titleSection}>Proyectos</h1>

      <div className={styles.cardsContainer}>

        {PROJECTS.map(({id,title,description,demoLink, imageUrl, repoLink, imageList}, index) => (
          <CardsProjects
            key={id}
            id={id}
            index={index}
            title={title}
            description={description}
            demoLink={demoLink}
            repoLink={repoLink}
            imageList={imageList}
          />
        ))}

      </div>
    </section>
  )
}
