import { useRef } from "react"
import styles from '../styles/home.module.css'
import imgHome from '../assets/images/image-home.svg'
import { useTranslation } from 'react-i18next';
// Icons
import { MdSimCardDownload } from "react-icons/md";
import SocialLinks from "./SocialLinks";

export const Home = () => {
  const home = useRef()
  const {i18n, t}=useTranslation()

  return (
    <section id='Home' ref={home} className={styles.homeContainer}>
      <picture className={styles.containerImg}>
        <img data-aos="zoom-in" data-aos-duration="900" src={imgHome} alt="Ilustracion Kevin Palma" />
      </picture>

      <div data-aos="fade-down-right" data-aos-duration="900" className={styles.home_info}>
        <p className={styles.home_text1}>{t('homeGreeting')}</p>
        <p className={styles.home_text2}>Kevin Palma</p>

        <div>
          {/* <p className={`${styles.home_text3} ${styles.textType}`}>Magister Artium en Seguridad Informática</p> */}
        </div>

        <div className={styles.home_text4}>
          <p>{t("homeDescription")}</p>
        </div>

        <div className={styles.containerBtn}>
          <a href='https://drive.google.com/file/d/1XtNmX6aFttLOf03wyfwwgzJfcBN1fPZN/view?usp=sharing' target='_blank' className={styles.homeBtn}>
            <button className='btn primaryBtn'>
              <i><MdSimCardDownload/></i>
              <span>{t('downloadCv')}</span>
            </button>
          </a>

          {/* <a href="" className={styles.homeBtn}>
            <button className='btn secundaryBtn'>Contacto</button>
          </a> */}
        </div>

      </div>

      <div data-aos="fade-right" data-aos-duration="900" className={styles.links}>
        <SocialLinks/>
      </div>

    </section>
  )
}
