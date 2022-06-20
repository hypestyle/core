module.exports = {
    // Basic settings
    settings: {
        outDir: './css', // the output directory, you can leave it emty
        outFile: 'hypestyle.config.css', // the output file name, default is hypestyle.config.css
    },

    // All the configs for hypestyle, read (https://www.hypestylecss.xyz/docs/cli/config) for more info
    configs: {
        // Customize your colors
        colors: {
            primary: '#00bcd4', // primary color example
            orange: '#ff9800', // orange color example
            red: '#f44336', // red color example
        },

        // Customize utility classes
        utils: {
            margin: {
                top: {},
                bottom: {},
                right: {},
                left: {},
            },

            padding: {
                top: {},
                bottom: {},
                right: {},
                left: {},
            },

            fontFamily: {
                example: '"Roboto", sans-serif',
            },
        },
    },
}
