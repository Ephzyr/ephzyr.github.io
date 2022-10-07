import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

export const sidebarEn: HopeThemeSidebarConfig = {
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
}
