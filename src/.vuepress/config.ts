import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

const base = process.env.BASE || "/";

export default defineUserConfig({
  base,

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `${base}boxicons/boxicons.min.css`
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Ephzyr Docs",
      description: "Documentation",
    },
    "/es/": {
      lang: "es-ES",
      title: "Ephzyr Docs",
      description: "Documentación",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/es/": {
          placeholder: "Buscar",
        },
      },
    }),
  ],
});
