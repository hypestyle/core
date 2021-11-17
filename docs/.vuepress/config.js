module.exports = {
  plugins: ["@vuepress/last-updated"],
  title: "HypeStyle CSS",
  description:
    "HypeStyle CSS is a collection of CSS utilities for web development.",

  themeConfig: {
    lastUpdated: true,
    // search
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/" },
      { text: "Examples", link: "/examples/" },
      { text: "Github", link: "https://github.com/lassev05/hypestyle" },
    ],

    sidebar: "auto",
  },
};
