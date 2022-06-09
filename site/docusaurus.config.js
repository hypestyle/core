// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hypestyle CSS',
  tagline: 'Small, useful CSS library build on utility classes & components.',
  url: 'https://lassv-hypestyle-hypestyle-4jg7qw674276w7-3000.githubpreview.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hypestyle', // Usually your GitHub org/user name.
  projectName: 'hypestyle', // Usually your repo name.

  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', "da"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      //algolia: {
      //  apiKey: '',
     //   indexName: '',
      //  contextualSearch: true,
     //   placeholder: 'Search in the docs...',
     //   appId: ""

    //  },

   


      navbar: {
        title: 'Hypestyle',
        logo: {
          alt: 'Hypestyle Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hypestyle/hypestyle',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Open Collective',
                href: 'https://opencollective.com/hypestyle-css',
              },
              {
                label: 'GitHub Discussion',
                href: 'https://github.com/hypestyle/HypeStyle/discussions',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hypll_dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hypestyle/hypestyle',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hypll Software. - Hypestylelabs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // Search config.
      // @ts-ignore
    
    }),
};

module.exports = config;
