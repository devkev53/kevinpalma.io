import { create } from "zustand";

// Taken a preferes color theme for system
const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Taken a preferes color theme for localStorage
const localTheme = window.localStorage.getItem("theme") || getSystemTheme();

// create Theme Store
export const themeStore = create((set) => ({
  theme: localTheme,
  setTheme: (theme) => set({ theme }),
}));
