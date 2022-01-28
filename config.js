module.exports = {
    port: 3010,

    root: './',
    src: './src',
    dist: './dist',
    build: './build',

    scss: './src/scss/*.scss',
    js: './src/js/*.js',
    jsLibs: './src/js/libs/**/*',
    img: './src/img/**/*',
    html: './src/**/*.html',

    tailwind: './src/scss/tailwindcss/*.scss',
    tailConfig: './src/scss/tailwindcss/tailwind.config.js',

    bootstrap: '',

    git: {
        url: 'https://github.com/rahmanow/charwa.git',
        branch: 'dev',
        m: '-Auto commit by Gulp',
        args: '-m',
    },
    surgeUrl: 'roomy-neck.surge.sh'



    // config: {
    //     tailwind: './src/tailwind.config.js',
    //     port: 3010,
    //     ui: 3025
    // },
    // deploy: {
    //     gitURL: 'https://github.com/rahmanow/charwa.git',
    //     gitBranch: 'dev',
    //     gitCommitMessage: '- home-slider and navigation files converted to tailwind',
    //     gitCommitArgs: '-m',
    //     surgeUrl: 'roomy-neck.surge.sh'
    // },
    // paths: {
    //     root: "./",
    //     src: {
    //         base: "./src",
    //         css: "./src/css",
    //         js: "./src/js",
    //         img: "./src/img"
    //     },
    //     dist: {
    //         base: "./dist",
    //         css: "./dist/css",
    //         js: "./dist/js",
    //         img: "./dist/img"
    //     },
    //     build: {
    //         base: "./build",
    //         css: "./build/css",
    //         js: "./build/js",
    //         img: "./build/img"
    //     }
    // }
}