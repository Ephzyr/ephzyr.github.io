import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/": [
    "",
    {
      text: "Ephzyr",
      icon: "",
      prefix: "ephzyr/",
      children: [
        "getting-started",
        "guides/",
        "structure/",
        "developer/",
        "changelogs/",
      ],
    },
  ],

  "/ephzyr/": [
    "",
    "getting-started",
    {
      text: "Guides",
      icon: "bx bxs-book-reader",
      prefix: "guides/",
      collapsable: true,
      children: [
        {
          text: "Linux",
          icon: "bx bxl-tux",
          prefix: "linux/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "Windows",
          icon: "bx bxl-windows",
          prefix: "windows/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
  ],
});
