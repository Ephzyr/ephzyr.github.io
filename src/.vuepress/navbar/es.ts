import { navbar } from "vuepress-theme-hope";

export const es = navbar([
  {
    text: "Inicio",
    icon: "bx bxs-home",
    link: "/es/",
  },
  {
    text: "Proyectos",
    icon: "bx bx-library",
    children: [
      {
        text: "RS",
        children: [
          {
            text: "Ephzyr",
            icon: "bx bx-radio-circle-marked",
            link: "/es/ephzyr/",
          },
        ],
      },
    ],
  },
]);
