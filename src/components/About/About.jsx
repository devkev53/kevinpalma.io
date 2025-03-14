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
      data-aos="fade-up"
    >
      <h1 className={styles.titleSection}>Sobre mí</h1>

      <div data-aos="fade-right" aos-duration="700" className={styles.infoWrapper}>
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
