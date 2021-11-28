module.exports = {
  plugins: ["@vuepress/last-updated", "@vuepress/back-to-top"],
  title: "HypeStyle CSS",
  icon: "/img/icon.png",
  lang: "en-US",
  theme: "default-prefers-color-scheme",
  description:
    "HypeStyle CSS is a collection of CSS utilities for web development.",
  head: [
    ["link", { rel: "icon", href: `/img/icon.png` }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/hypestyle@1.0.0/dist/hypestyle.min.css",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "HypeStyle CSS is a collection of CSS utilities for web development.",
      },
    ],
  ],

  themeConfig: {
    // some settings
    logo: "/img/icon.png",
    searchPlaceholder: "Search in the docs",
    nextLinks: true,
    smoothScroll: true,
    lastUpdated: true,
    backToTop: true,
    search: true,
    searchMaxSuggestions: 15,
    // repo: "lassev05/hypestyle",
    // repoLabel: "✨ Contribute!",

    // head

    // navbar
    nav: [
      { text: "🏠 Home", link: "/" },
      { text: "📜 Documentation", link: "/docs/" },
      {
        text: "🚩 Languages",
        ariaLabel: "Language Menu",
        items: [{ text: "Danish (BETA)", link: "/docs/da/" }],
      },
      { text: "⭐ Github", link: "https://github.com/lassev05/hypestyle" },
    ],

    //

    sidebar: [
      {
        title: "Getting Started",
        //  path: "/docs/",
        children: ["/docs/"],
        initialOpenGroupIndex: -1,
      },
      {
        title: "Components",
        children: ["/docs/components/button", "/docs/components/navbar"],
        initialOpenGroupIndex: -1,
      },
      {
        title: "Utilities",
        children: [
          "/docs/utilities/alignment",
          "/docs/utilities/border-radius",
          "/docs/utilities/padding",
          "/docs/utilities/margin",
          "/docs/utilities/display",
          "/docs/utilities/flex-direction",
          "/docs/utilities/flex-wrap",
          "/docs/utilities/text-decoration",
          "/docs/utilities/font-family",
          "/docs/utilities/font-size",
          "/docs/utilities/height",
        ],
        initialOpenGroupIndex: -1,
      },
    ],
  },
};
