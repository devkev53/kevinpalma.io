import React, { useCallback, useState } from 'react'
import styles from '../../styles/burgerBtn.module.css'

import { useHeaderHook } from '../../hooks/useHeader'
const BurgerBtn = () => {
  
  const {isActive, openMenu, closeMenu} = useHeaderHook()

  const handleMenu = () => {
    isActive ? closeMenu() : openMenu()
  }

  return (
    <div 
      className={`
        ${styles.button}
        ${isActive ? styles.active : styles.notActive}
      `}
      onClick={handleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerBtn
