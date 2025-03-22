import React from 'react'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'
import { MdNavigateNext, MdNavigateBefore, MdOutlineClose} from "react-icons/md";
import notImg from '../../../public/assets/notImg.png'
import styles from './modalShowImgs.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export const ModalShowImgs = ({fnClose, imgList}) => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState({
    desktop: imgList.desktop[index],
    mobile: imgList.mobile[index],
  })

  const setShowImages = () => {
    if (imgList.mobile.length>0) {
      setImages({
        desktop: imgList.desktop[index],
        mobile: imgList.mobile[index],
      })
    }
  }

  const nextIndex = () => {
    return setIndex(index+1)
  }
  const previousIndex = () => {
    return setIndex(index - 1)
  }

  const handleNextImg = () => {
    if (index < imgList.mobile.length-1) {
      nextIndex()
    }
  }
  const handlePreviousImg = () => {
    if (index > 0) {
      previousIndex()
    }
  }

  useEffect(()=>{
    setShowImages()
  }, [index])


  return (
    <ModalWrapper>
      <div className={styles.container}>
        <button onClick={fnClose} className={styles.closeBtn}>
          <i>
            <MdOutlineClose/>
          </i>
        </button>

        <picture>
          {imgList.mobile.length > 0
            ? (
              <>
              <source media="(min-width: 760px)" srcSet={images.desktop} />
              <img src={images.mobile} />
              </>
            )
            : (
              <img src={notImg}/>
            )
          }
        </picture>
        {imgList.mobile.length > 0 && (
          <>
            <button
              disabled={index<=0}
              onClick={handlePreviousImg}
              className={styles.previousBtn}
            >
              <i><MdNavigateBefore/></i>
            </button>
            <button
              disabled={index===imgList.mobile.length-1}
              onClick={handleNextImg}
              className={styles.nextBtn}
            >
              <i><MdNavigateNext/></i>
            </button>
          </>
        )}
      </div>
    </ModalWrapper>
  )
}
