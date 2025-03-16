import React from 'react'
import styles from './projects.module.css'
import farmApp from '../../assets/farmApp.png'
import example from '../../assets/example.png'
import { FaChrome, FaGithubAlt, FaRegImages } from "react-icons/fa";
import { CardsProjects } from '../CardsProjects/CardsProjects';
import { PROJECTS } from '../../utils/projectsList';
import { useState } from 'react';
import { useEffect } from 'react';

export const Projects = () => {

  return (
    <section id='Projects' className={styles.projectsWrapper}>
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
