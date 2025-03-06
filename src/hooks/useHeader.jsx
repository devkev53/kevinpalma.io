import { useHeader } from "../store/headerStore"

export const useHeaderHook = () => {
  const {isActive, setIsActive} = useHeader(state=>state)
  const closeMenu = () => {
    setIsActive(false)
  }
  const openMenu = () => {
    setIsActive(true)
  }

  return {
    isActive,
    closeMenu,
    openMenu
  }
}