import React, { useEffect } from 'react'
import styles from './about.module.css'
import {useNearScreen} from '../../hooks/useNearScreen'

const About = () => {
  const {isNearScreen, ref} = useNearScreen({distance:'-300px'})

  return (
    <section id='About' ref={ref} className={`${styles.about} ${isNearScreen && styles.animate}`}>
      <h1 className={styles.titleSecction}>Sobre mí</h1>
      <div className={styles.infoWrapper}>
        <div className={styles.textInfo}>
          <p>Kevin Palma</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat repudiandae sit quas quaerat? Necessitatibus suscipit sit deserunt in magni eaque aliquid! Quis tempora soluta, commodi delectus officiis consequatur eos tenetur officia temporibus fugiat perferendis est. Laudantium repellat excepturi, at quaerat dolore assumenda quo nam pariatur quam facere minus voluptatem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat repudiandae sit quas quaerat? Necessitatibus suscipit sit deserunt in magni eaque aliquid! Quis tempora soluta, commodi delectus officiis consequatur eos tenetur officia temporibus fugiat perferendis est. Laudantium repellat excepturi, at quaerat dolore assumenda quo nam pariatur quam facere minus voluptatem!</p>
        </div>
        <picture className={styles.imgAbout}>
          <img src="https://github.com/mariasmoUN/portafolio/blob/main/assets/images/image-sobreMi.png?raw=true" alt="aboutMeImg" />
        </picture>
      </div>
    </section>
  )
}

export default About
