import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import styles from '../../styles/loader.module.css' 
const Loader = () => {
  const [show, setShow] = useState(false)
  useEffect(()=> {
    setTimeout(() => {
      setShow(true)
    }, 300);
  },[])
  return (
    <div className={`${show !== true && styles.show } ${styles.wrapper}`}>
      <picture>
        <Logo/>
      </picture>
    </div>
  )
}

export default Loader
