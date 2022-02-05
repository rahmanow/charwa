module.exports = {
    config: {
        tailwind: './src/tailwind.config.js',
        port: 3010,
        ui: 8080
    },
    deploy: {
        gitURL: 'https://github.com/rahmanow/charwa.git',
        gitBranch: 'dev',
        gitCommitMessage: '- Auto commit by Gulp',
        gitCommitArgs: '-m',
        surgeUrl: 'roomy-neck.surge.sh'
    },
    paths: {
        root: "./",
        src: {
            base: "./src",
            css: "./src/scss",
            js: "./src/js",
            img: "./src/img"
        },
        dist: {
            base: "./dist",
            css: "./dist/css",
            js: "./dist/js",
            img: "./dist/img"
        },
        build: {
            base: "./build",
            css: "./build/css",
            js: "./build/js",
            img: "./build/img"
        }
    }
}