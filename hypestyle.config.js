module.exports = {
    // Basic settings
    settings: {
        files: ['.html', '.js'], // the files hypestyle cli is building
        outDir: './src/css', // the output directory, you can leave it emty
        outFile: 'build.css', // the output file name, default is hypestyle.build.css
    },

    // All the configs for hypestyle, read (https://www.hypestylecss.xyz/docs/cli/config) for more info
    configs: {
        // Customize your colors
        colors: {
            primary: '#00bcd4', // primary color example
        },
    },
}
