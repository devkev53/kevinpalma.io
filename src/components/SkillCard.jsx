import styles from '../styles/skills.module.css'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const SkillCard = ({iconPath, name, link, skillStyle, effect, duration}) => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div
      className={`${styles.skillCard}
      ${skillStyle}`}
      data-aos={effect}
      data-aos-duration={duration}
    >
      <a href={link} target='_blank'>
        <picture>
          <img src={iconPath} alt={`${name} Icon`} />
        </picture>
        <p>{name}</p>
      </a>
    </div>
  )
}
