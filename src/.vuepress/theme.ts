import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, zhNavbarConfig } from "./navbar/index.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ephzyr.github.io",

  repo: "Ephzyr/docs",

  docsDir: "src/",

  locales: {
    "/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,
    },
    "/zh/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": "1234",
      "/zh/demo/encrypt.html": "1234",
    },
  },

  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mathjax: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
