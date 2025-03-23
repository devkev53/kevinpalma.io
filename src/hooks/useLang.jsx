import { useEffect } from 'react'
import {langStore} from '../store/langStore'
import { useTranslation } from 'react-i18next'
import styles from '../styles/header.module.css'

export const useLangHook = (langBtns) => {
  const {langCode, setLangCode} = langStore(state=>state)
  const btnLangAll = document.querySelectorAll('btnLang')

  const {i18n} = useTranslation()

  const activeBtns = () => {
    langBtns.forEach((current) => {
      current.classList.remove(`${styles.disabled}`)
    })
  }

  const onChangeLang = () => {
    i18n.changeLanguage(langCode.code)
  }

  function changeToSpanish(e) {
    activeBtns()
    e.currentTarget.classList.add(`${styles.disabled}`)
    setLangCode({label: "Spanish", code: "es"})
  }
  function changeToEnglish(e) {
    activeBtns()
    e.currentTarget.classList.add(`${styles.disabled}`)
    setLangCode({label: "English", code: "en"})
  }

  useEffect(()=>{
    onChangeLang()
  },[langCode])

  return {
    changeToEnglish,
    changeToSpanish,
    langCode
  }
}