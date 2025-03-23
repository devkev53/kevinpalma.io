import { create } from "zustand";

export const langStore = create((set) => ({
  langCode: { label: "English", code: "en" },
  setLangCode: (langCode) => set({ langCode }),
}));
