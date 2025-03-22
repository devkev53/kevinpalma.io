import { createPortal } from "react-dom"
import styles from './../../styles/modal.module.css'

export const ModalWrapper = ({children}) => {
  const portal = window.document.querySelector("#portal")
  return createPortal(
    <div className={styles.wrapper}>{children}</div>,
    portal
  )
}
