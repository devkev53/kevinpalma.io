import { useEffect, useRef, useState } from "react"

export const useNearScreen = ({distance="100px", externalRerf, once=true}) => {
  const [isNearScreen, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    let observer
    const element = externalRerf ? externalRerf.current : ref.current

    const onChange = (entries) => {
      const el = entries[0]
      console.log(distance)
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
        rootMargin:distance
      })
      element && observer.observe(element)
    })
    return () => observer && observer.disconnect()
  })

  return {isNearScreen, ref}
}