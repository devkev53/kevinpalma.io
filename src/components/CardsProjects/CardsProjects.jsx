import React, {useEffect} from 'react'
import farmApp from '../../../public/assets/projects/farmapp/desktop/1.png'
import styles from '../../styles/cardProject.module.css'
import { FaChrome, FaGithubAlt, FaRegImages } from "react-icons/fa";
import { useState } from 'react';
import { ModalShowImgs } from '../ModalShowImgs/ModalShowImgs';
import { useCallback } from 'react';
import example from '../../../public/assets/example.png'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


export const CardsProjects = ({
  id, title, description, image,
  imageList, demoLink, repoLink, index
}) => {

  const [showImages, setShowImages] = useState(false)

  const closeModal  =  () => {
    setShowImages(false)
  }

  useEffect(() => {
    AOS.init();
  },[])



  return (
    <>
      {showImages && (<ModalShowImgs fnClose={closeModal} imgList={imageList} />)}
      <div
        data-aos="fade-up"
        data-aos-duration={id*100}
        className={styles.projectCardWrapper}
      >
        <picture className={styles.pictureImages} onClick={()=>setShowImages(true)}>
          <img src={`${imageList.desktop.length>0 ? imageList.desktop[0]:example}`} alt="Screen App" />
          <i><FaRegImages/></i>
        </picture>
        <div className={styles.projectInfo}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.technologies}></div>
        <div className={styles.projectFooter}>
          {demoLink.length > 0 && (
            <a target='_blank' href={demoLink} className="btn secondaryBtn">
              <i><FaChrome/></i>
              <span>Demo</span>
            </a>
          )}
          {repoLink.length > 0 && (
            <a target='_blank' href={repoLink} className="btn primaryBtn">
              <i><FaGithubAlt/></i>
              <span>Repo</span>
            </a>
          )}
        </div>
      </div>
    </>
  )
}
