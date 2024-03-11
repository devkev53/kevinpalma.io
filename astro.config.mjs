import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "es",
    },
  },
});
