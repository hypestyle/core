module.exports = {
  plugins: ["@vuepress/last-updated", "@vuepress/back-to-top"],
  title: "HypeStyle CSS",
  description:
    "HypeStyle CSS is a collection of CSS utilities for web development.",

  themeConfig: {
    // some settings
    logo: "/img/icon.png",
    searchPlaceholder: "Search in the docs",
    nextLinks: true,
    smoothScroll: true,
    lastUpdated: true,
    backToTop: true,
    search: true,
    searchMaxSuggestions: 10,

    // navbar
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/" },

      { text: "Github", link: "https://github.com/lassev05/hypestyle" },
    ],

    sidebar: "auto",
  },
};
