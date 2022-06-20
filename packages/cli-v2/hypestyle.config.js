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
        },

        // Customize utility classes
        utils: {
            margin: {
                top: '0px',
            },
            marginBottom: {
                bottom: '0px',
            },
            marginTop: {
                top: '0px',
            },
            padding: {},
            paddingBottom: {},
            paddingTop: {},
            fontFamily: {},
        },
    },
}
