module.exports = {
    plugins: ['@vuepress/last-updated', '@vuepress/back-to-top'],
    title: 'HypeStyle CSS',
    icon: '/img/icon.png',
    lang: 'en-US',
    displayAllHeaders: true,
    theme: 'default-prefers-color-scheme',
    description:
        'HypeStyle CSS is a collection of CSS utilities for web development.',
    head: [
        ['meta', { charset: 'utf-8' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],

        // create a meta tag appletouch icon
        [
            'link',
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/img/icon.png',
            },
        ],
        ['link', { rel: 'icon', href: `/img/icon.png` }],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/hypestyle@0.1.4/dist/css/hypestyle.min.css',
            },
        ],
        [
            'meta',
            {
                name: 'description',
                content:
                    'HypeStyle CSS is a collection of CSS utilities for web development.',
            },
        ],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],

    themeConfig: {
        // some settings
        logo: '/img/icon.png',
        searchPlaceholder: 'Search...',
        nextLinks: true,
        smoothScroll: true,
        lastUpdated: true,
        backToTop: true,
        search: true,
        searchMaxSuggestions: 10,
        // repo: "lassev05/hypestyle",
        // repoLabel: "✨ Contribute!",

        // head

        // navbar
        nav: [
            { text: '🏠 Home', link: '/' },
            { text: '📜 Documentation', link: '/docs/' },
            {
                text: '🚩 Languages',
                ariaLabel: 'Language Menu',
                items: [{ text: 'Danish (BETA)', link: '/docs/da/' }],
            },
            {
                text: '⭐ Github',
                link: 'https://github.com/lassev05/hypestyle',
            },
        ],

        sidebar: [
            {
                title: 'Introduction',
                collapsable: false,
                path: '/docs/',
            },

            {
                title: 'CLI',
                collapsable: false,
                children: ['/docs/cli/installation', '/docs/cli/usage'],
            },

            {
                title: 'Components',
                collapsable: false,
                children: [
                    '/docs/components/button',
                    '/docs/components/navbar',
                ],
            },

            {
                title: '🔨 Utilities',
                collapsable: false,
            },

            {
                title: 'Flex & Grid',
                collapsable: false,
                children: [
                    '/docs/utilities/flex/flex-direction',
                    '/docs/utilities/flex/flex-wrap',
                ],
            },

            {
                title: 'Typography',
                collapsable: false,
                children: [
                    '/docs/utilities/typography/font-family',
                    '/docs/utilities/typography/font-size',
                    '/docs/utilities/typography/alignment',
                    '/docs/utilities/typography/text-owerflox',
                    '/docs/utilities/typography/text-transform',
                    '/docs/utilities/typography/text-decoration',
                ],
            },

            {
                title: 'Spacing',
                collapsable: false,
                children: ['/docs/utilities/margin', '/docs/utilities/padding'],
            },

            {
                title: 'Sizeing',
                collapsable: false,
                children: ['/docs/utilities/height', '/docs/utilities/width'],
            },

            {
                title: 'Backgrounds',
                collapsable: false,
                children: [],
            },

            {
                title: 'Shadows & Effects',
                collapsable: false,
                children: [
                    '/docs/utilities/effects/box-shadow',
                    '/docs/utilities/effects/text-shadow',
                    '/docs/utilities/effects/opacity',
                    '/docs/utilities/effects/transition',
                ],
            },

            {
                title: 'Colors',
                collapsable: false,
                children: [
                    '/docs/utilities/colors/color-pattle',
                    '/docs/utilities/colors/background-color',
                ],
            },
        ],
    },
}
