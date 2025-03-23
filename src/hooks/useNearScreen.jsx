import { useEffect, useRef, useState } from "react"

import styles from '../styles/header.module.css'

export const useNearScreen = ({distance="100px", externalRef, once=true, threshold=0.5}) => {

  const sectionAll = document.querySelectorAll('section[id]')
  const [isNearScreen, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : ref.current

    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import ('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin:distance,
        threshold: threshold
      })
      element && observer.observe(element)
    })
    return () => observer && observer.disconnect()
  })

  const activate = () => {
    sectionAll.forEach((current) => {
      const sectionId = current.getAttribute('id');
      document.querySelector('nav a[href*=' + sectionId + ']').classList.remove(`${styles.active}`)
    })
    const thisId = externalRef.current.getAttribute('id')
    document.querySelector('nav a[href*=' + thisId + ']').classList.add(`${styles.active}`)
  }

  return {isNearScreen, ref, activate}
}