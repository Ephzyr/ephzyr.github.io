import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  {
    text: "Home",
    icon: "bx bxs-home",
    link: "/",
  },
  {
    text: "Projects",
    icon: "bx bx-library",
    children: [
      {
        text: "RS",
        children: [
          {
            text: "Ephzyr",
            icon: "bx bx-radio-circle-marked",
            link: "/ephzyr/",
          },
        ],
      },
    ],
  },
]);
