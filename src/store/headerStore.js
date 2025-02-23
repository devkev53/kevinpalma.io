import { create } from "zustand";

export const useHeader = create((set) => ({
  isActive: false,
  setIsActive: (isActive) => set({isActive})
}))