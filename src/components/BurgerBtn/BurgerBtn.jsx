import React, { useCallback, useState } from 'react'
import styles from './burgerBtn.module.css'
// Store
import {useHeader} from '../../store/headerStore'

const BurgerBtn = () => {
  
  const {isActive, setIsActive} = useHeader(state=>state)
    
  const showMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div 
      className={`
        ${styles.button}
        ${isActive ? styles.active : styles.notActive}
      `}
      onClick={showMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerBtn
